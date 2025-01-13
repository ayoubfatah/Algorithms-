class SmartTextTransformer {
  constructor() {
    // Sentiment indicators
    this.positiveWords = new Set([
      "good",
      "great",
      "awesome",
      "excellent",
      "happy",
      "love",
      "wonderful",
      "fantastic",
    ]);
    this.negativeWords = new Set([
      "bad",
      "terrible",
      "awful",
      "horrible",
      "sad",
      "hate",
      "disappointing",
      "poor",
    ]);

    // Common patterns for different types of data
    this.patterns = {
      email: /[\w.-]+@[\w.-]+\.\w+/g,
      phone: /(\+\d{1,3}[-.]?)?\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/g,
      url: /(https?:\/\/[^\s]+)/g,
      socialMedia: /(?:@[\w_]+)/g,
      hashtags: /#[^\s#]+/g,
      date: /\d{1,4}[-./]\d{1,2}[-./]\d{1,4}/g,
      creditCard: /\d{4}[-.]?\d{4}[-.]?\d{4}[-.]?\d{4}/g,
      ipAddress: /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g,
    };
  }

  process(text, options = {}) {
    const {
      detectPatterns = true,
      analyzeSentiment = true,
      generateSummary = true,
      findKeywords = true,
      calculateReadability = true,
      detectLanguage = true,
      findSimilarities = true,
      sample = null,
    } = options;

    const result = {
      originalText: text,
      length: text.length,
      stats: this._getBasicStats(text),
      transformations: {},
      insights: {},
    };

    // Detect and mask sensitive patterns
    if (detectPatterns) {
      result.patterns = this._detectPatterns(text);
      result.transformations.maskedText = this._maskSensitiveData(text);
    }

    // Analyze sentiment and emotional tone
    if (analyzeSentiment) {
      result.insights.sentiment = this._analyzeSentiment(text);
    }

    // Generate smart summary
    if (generateSummary) {
      result.transformations.summary = this._generateSummary(text);
    }

    // Extract key phrases and keywords
    if (findKeywords) {
      result.insights.keywords = this._extractKeywords(text);
    }

    // Calculate readability metrics
    if (calculateReadability) {
      result.insights.readability = this._calculateReadability(text);
    }

    // Detect language and script
    if (detectLanguage) {
      result.insights.language = this._detectLanguage(text);
    }

    // Find similarities with sample text
    if (findSimilarities && sample) {
      result.insights.similarity = this._findSimilarities(text, sample);
    }

    return result;
  }

  _getBasicStats(text) {
    const words = text.trim().split(/\s+/);
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const paragraphs = text.split(/\n\s*\n/).filter(Boolean);

    return {
      characters: text.length,
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      averageWordLength: (text.length / words.length).toFixed(2),
      averageWordsPerSentence: (words.length / sentences.length).toFixed(2),
    };
  }

  _detectPatterns(text) {
    const found = {};
    for (const [name, pattern] of Object.entries(this.patterns)) {
      const matches = text.match(pattern) || [];
      if (matches.length > 0) {
        found[name] = matches;
      }
    }
    return found;
  }

  _maskSensitiveData(text) {
    let maskedText = text;

    // Mask emails
    maskedText = maskedText.replace(this.patterns.email, "[EMAIL]");

    // Mask phone numbers
    maskedText = maskedText.replace(this.patterns.phone, "[PHONE]");

    // Mask credit cards
    maskedText = maskedText.replace(this.patterns.creditCard, "[CREDIT_CARD]");

    // Mask IP addresses
    maskedText = maskedText.replace(this.patterns.ipAddress, "[IP_ADDRESS]");

    return maskedText;
  }

  _analyzeSentiment(text) {
    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0;
    let negativeCount = 0;
    let totalWords = words.length;

    words.forEach((word) => {
      if (this.positiveWords.has(word)) positiveCount++;
      if (this.negativeWords.has(word)) negativeCount++;
    });

    const positiveScore = positiveCount / totalWords;
    const negativeScore = negativeCount / totalWords;
    const overallScore = (positiveScore - negativeScore + 1) / 2;

    return {
      score: overallScore.toFixed(2),
      positive: positiveScore.toFixed(2),
      negative: negativeScore.toFixed(2),
      sentiment:
        overallScore > 0.6
          ? "positive"
          : overallScore < 0.4
          ? "negative"
          : "neutral",
    };
  }

  _generateSummary(text) {
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    if (sentences.length <= 3) return text;

    // Score sentences based on position and keyword frequency
    const wordFreq = this._getWordFrequency(text);
    const scoredSentences = sentences.map((sentence, index) => ({
      sentence: sentence.trim(),
      score: this._scoreSentence(sentence, wordFreq, index, sentences.length),
    }));

    // Sort by score and take top 3 sentences
    const topSentences = scoredSentences
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .sort(
        (a, b) => sentences.indexOf(a.sentence) - sentences.indexOf(b.sentence)
      );

    return topSentences.map((s) => s.sentence).join(". ") + ".";
  }

  _getWordFrequency(text) {
    const words = text.toLowerCase().split(/\s+/);
    return words.reduce((freq, word) => {
      freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {});
  }

  _scoreSentence(sentence, wordFreq, index, total) {
    const words = sentence.toLowerCase().split(/\s+/);
    const frequencyScore =
      words.reduce((score, word) => score + (wordFreq[word] || 0), 0) /
      words.length;
    const positionScore = 1 - Math.abs(index - 0) / total; // Favor sentences near the beginning
    return frequencyScore * 0.6 + positionScore * 0.4;
  }

  _extractKeywords(text) {
    const words = text.toLowerCase().split(/\s+/);
    const freq = this._getWordFrequency(text);

    // Filter out common words and sort by frequency
    const keywords = Object.entries(freq)
      .filter(([word]) => word.length > 3) // Skip short words
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({
        word,
        count,
        frequency: (count / words.length).toFixed(3),
      }));

    return keywords;
  }

  _calculateReadability(text) {
    const words = text.split(/\s+/).length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const syllables = this._countSyllables(text);

    // Flesch Reading Ease
    const flesch =
      206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);

    // Flesch-Kincaid Grade Level
    const grade =
      0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;

    return {
      fleschReadingEase: Math.round(flesch),
      fleschKincaidGrade: Math.round(grade * 10) / 10,
      readingLevel: this._getReadingLevel(flesch),
    };
  }

  _countSyllables(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .replace(/[^aeiouy]+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean).length;
  }

  _getReadingLevel(score) {
    if (score > 90) return "Very Easy";
    if (score > 80) return "Easy";
    if (score > 70) return "Fairly Easy";
    if (score > 60) return "Standard";
    if (score > 50) return "Fairly Difficult";
    if (score > 30) return "Difficult";
    return "Very Difficult";
  }

  _detectLanguage(text) {
    // Simple language detection based on character frequency
    const freq = {};
    text.split("").forEach((char) => {
      freq[char] = (freq[char] || 0) + 1;
    });

    // Check for non-Latin characters
    const nonLatin = text.match(/[^\x00-\x7F]/g) || [];
    const nonLatinRatio = nonLatin.length / text.length;

    let script = "Latin";
    if (nonLatinRatio > 0.5) {
      if (text.match(/[\u0400-\u04FF]/)) script = "Cyrillic";
      else if (text.match(/[\u0600-\u06FF]/)) script = "Arabic";
      else if (text.match(/[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF]/))
        script = "Japanese";
      else if (text.match(/[\u4E00-\u9FFF]/)) script = "Chinese";
      else script = "Other";
    }

    return {
      script,
      confidence: ((1 - nonLatinRatio) * 100).toFixed(1) + "%",
    };
  }

  _findSimilarities(text1, text2) {
    const words1 = new Set(text1.toLowerCase().split(/\s+/));
    const words2 = new Set(text2.toLowerCase().split(/\s+/));

    const intersection = new Set([...words1].filter((x) => words2.has(x)));
    const union = new Set([...words1, ...words2]);

    const similarity = intersection.size / union.size;

    return {
      similarity: (similarity * 100).toFixed(1) + "%",
      commonWords: Array.from(intersection).slice(0, 5),
    };
  }
}

const transformer = new SmartTextTransformer();

const sampleText = `
  Hello! This is an example text with some sensitive data like email@example.com and phone number 123-456-7890. 
  It contains both positive and negative sentiments. I love the great weather today, but the traffic was terrible. 
  This text also includes some technical terms and patterns that will be analyzed.
  Check out our website at https://example.com or follow us @username on social media! #awesome
  Contact us at our IP address 192.168.1.1 or with credit card 4111-1111-1111-1111.
  `;

const result = transformer.process(sampleText, {
  sample:
    "Another text about weather and traffic conditions. The weather is great today!",
});

console.log(JSON.stringify(result, null, 2));
