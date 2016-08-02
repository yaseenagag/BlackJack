const rl = require('readline-sync')
const colors = require('colors')

module.exports = {
  forString: function(question){
    return rl.question(colors.green(question+' '));
  },

  forNumber: function(question){
    return parseInt(this.forString(question), 10);
  }
}