const bibleVerses = [
  {book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."},
  {book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength."},
  {book: "Jeremiah", chapter: 29, verse: 11, text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."},
  // Add more verses here
];

const commands = {
  // ... existing commands ...
  '!bible': (args) => {
    if (args.length === 0) {
      // Display a random Bible verse
      const randomIndex = Math.floor(Math.random() * bibleVerses.length);
      return `${bibleVerses[randomIndex].book} ${bibleVerses[randomIndex].chapter}:${bibleVerses[randomIndex].verse} - "${bibleVerses[randomIndex].text}"`;
    } else {
      // Search for a specific verse
      const searchQuery = args.join(' ');
      const foundVerses = bibleVerses.filter(verse => verse.text.toLowerCase().includes(searchQuery.toLowerCase()));
      if (foundVerses.length > 0) {
        return foundVerses.map(verse => `${verse.book} ${verse.chapter}:${verse.verse} - "${verse.text}"`).join('\n');
      } else {
        return 'No verses found';
      }
    }
  }
};
