function analyzeText() {
    const input = document.getElementById('text-input').value;
    const resultsDiv = document.getElementById('results');
  
    const pronouns = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];
    const prepositions = ["in", "on", "at", "by", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "of", "off", "over", "under"];
    const articles = ["a", "an"]; // Not 'the' cause its definite :(
  
    let letterCount = (input.match(/[a-zA-Z]/g) || []).length;
    let wordCount = (input.match(/\b\w+\b/g) || []).length;
    let spaceCount = (input.match(/ /g) || []).length;
    let newlineCount = (input.match(/\n/g) || []).length;
    let specialCount = (input.match(/[^\w\s]/g) || []).length;
  
    const tokens = input.toLowerCase().match(/\b\w+\b/g) || [];
  
    const countOccurrences = (list) =>
      list.reduce((acc, word) => {
        if (!acc[word]) acc[word] = 0;
        acc[word]++;
        return acc;
      }, {});
  
    const pronounCounts = countOccurrences(tokens.filter(w => pronouns.includes(w)));
    const prepositionCounts = countOccurrences(tokens.filter(w => prepositions.includes(w)));
    const articleCounts = countOccurrences(tokens.filter(w => articles.includes(w)));
  
    const renderCounts = (obj) =>
      Object.entries(obj)
        .map(([k, v]) => `<li><strong>${k}</strong>: ${v}</li>`)
        .join("");
  
    resultsDiv.innerHTML = `
      <h2>Basic Stats</h2>
      <ul>
        <li><strong>Letters:</strong> ${letterCount}</li>
        <li><strong>Words:</strong> ${wordCount}</li>
        <li><strong>Spaces:</strong> ${spaceCount}</li>
        <li><strong>Newlines:</strong> ${newlineCount}</li>
        <li><strong>Special Symbols:</strong> ${specialCount}</li>
      </ul>
  
      <h2>Pronouns</h2>
      <ul>${renderCounts(pronounCounts)}</ul>
  
      <h2>Prepositions</h2>
      <ul>${renderCounts(prepositionCounts)}</ul>
  
      <h2>Indefinite Articles</h2>
      <ul>${renderCounts(articleCounts)}</ul>
    `;
  }
  