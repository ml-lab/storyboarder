const util = require('../../utils/index.js')
const tips = require('./tips.js')


class StoryTips {
  constructor (sfx, notifications) {
    this.sfx = sfx
    this.notifications = notifications
    this.tips = util.shuffle(tips)
  }

  show () {
    if (this.tips.length == 0) {
      this.tips = util.shuffle(tips)
    }
    let tip = this.tips.shift()
    this.sfx.positive()
    this.notifications.notify({message: tip, timing: 20})
  }

}

module.exports = StoryTips