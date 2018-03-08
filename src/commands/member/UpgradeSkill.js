const { Command, Argument } = require('patron.js');
const String = require('../../utility/String.js');

class UpgradeSkill extends Command {
  constructor() {
    super({
      names: ['upgrade', 'upgradeskill'],
      groupName: 'member',
      description: 'Upgrade the level of a skill.',
      args: [
        new Argument({
          name: 'quantity',
          key: 'quantity',
          type: 'int',
          example: '5'
        }),
        new Argument({
          name: 'skill',
          key: 'skill',
          type: 'skill',
          preconditions: ['ownskillpoints'],
          example: 'magic',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args, text) {
    const skill = 'skills.' + args.skill;

    await msg.client.db.userRepo.modifySkillPoints(msg.dbGuild, msg.member, -args.amount);
    await msg.client.db.userRepo.updateUser(msg.author.id, msg.guild.id, { $inc: { [skill]: args.amount } });

    const newDbUser = await msg.client.db.userRepo.getUser(msg.author.id, msg.guild.id);

    return text.reply('You have upgraded ' + String.boldify(args.skill) + ' to `' + newDbUser.skills[args.skill] + '`.');
  }
}

module.exports = new UpgradeSkill();
