
const Reflux = require('reflux')

var Actions = Reflux.createActions([
  'addItem',
  'removeItem',
  'removeAllItems'
])

module.exports = Actions
