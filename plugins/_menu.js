const os = require('os');
const prefix = '.';

const cmd = {
  cmdname: 'bible',
  desc: 'Displays a random Bible verse or searches for verses',
  type: 'single',
  run: (bot, msg, args) => {
    if (args.length === 0) {
      msg.channel.send(getRandomVerse());
    } else {
      const query = args.join(' ');
      const results = searchVerses(query);
      if (results.length > 0) {
        msg.channel.send(results.join('\n'));
      } else {
        msg.channel.send('No verses found matching your query');
      }
    }
  },
};

function getRandomVerse() {
  const verses = [
    'Genesis 1 vs 1,in the beginning God created heaven and earth ',
    'Verse 2',
    'Verse 3',
  ];
  return verses[Math.floor(Math.random() * verses.length)];
}

function searchVerses(query) {
  const verses = [
    'Verse 1',
    'Verse 2',
    'Verse 3',
  ];
  return verses.filter((verse) => verse.includes(query));
}

module.exports = {
  name: cmd.cmdname,
  prefix: prefix,
  run: cmd.run,
};
