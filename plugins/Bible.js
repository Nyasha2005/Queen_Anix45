const bibleVerses = [
  {book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."},
  {book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength."},
  {book: "Jeremiah", chapter: 29, verse: 11, text: "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future."},
  {book: "Genesis", chapter 1, verse: 1, text: "In the beginning, God created heaven and the earth."},
{book: "Romans", chapter: 8, verse: 28, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."},
{book: "Isaiah", chapter: 40, verse: 31, text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint." },
{book: "Psalm", chapter: 23, verse: 4, text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff comfort me." },
{book: "Matthew", chapter: 22, verse: 37, text: "Jesus replied: 'Love the Lord your God with all your heart and with all your soul and with all your mind.'" },
{book: "Proverbs", chapter: 3, verse: 5, text: "Trust in the Lord with all your heart and lean not on your own understanding;" },
{book: "1 Corinthians", chapter: 13, verse: 13, text: "And now these three remain: faith, hope and love. But the greatest of these is love." },
{book: "Psalm", chapter: 121, verse: 1, text: "I lift up my eyes to the mountains—where does my help come from?" },
{book: "Jeremiah", chapter: 33, verse: 3, text: "Call to me and I will answer you and tell you great and unsearchable things you do not know." }
  // Add more verses here
];

const commands = {
  // ... existing commands ...
  '.bible': (args) => {
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
