const truncateText = (text, maxLength, ellipsis = '...') => 
    text.length > maxLength 
      ? text.substr(0, text.lastIndexOf(' ', maxLength)) + ellipsis 
      : text;