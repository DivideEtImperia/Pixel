const { Command } = require('discord.js-commando');

class FortyEightYearOldMan extends Command {
  constructor(client) {
    super(client, {
      name: 'fortyeightyearoldman',
      aliases: ['48yearoldman', '48yearold', '48year'],
      group: 'member',
      memberName: 'fortyeightyearoldman',
      description: 'Sends the popular "48 Year Man From Somalia" copypasta.',
      examples: ['48yearman']
    });
  }

  run(msg) {
    return msg.say('Hello am 48 year man from somalia. Sorry for my bed england. I selled my wife for internet connection for play conter strik and i want to become the goodest player like you I play with 400 ping on brazil and i am global elite 2. pls no copy pasterio my story');
  }
}

module.exports = FortyEightYearOldMan;