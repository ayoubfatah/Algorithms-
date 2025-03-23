function generateHashtag(str) {
  str = str.trim();
  if (!str) return false;
  const upperCase = str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

  const padded = "#" + upperCase;

  if (padded.length > 140) return false;

  return padded;
}
