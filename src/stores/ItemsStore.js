
const Actions = require('../actions/Actions')
const Reflux = require('reflux')

var ItemsStore = Reflux.createStore({

  listenables: Actions,

  init() {
    this.list = {}
  },

  addItem(item) {
    this.list[item.id] = item
    this.trigger(this.list)
  },

  removeItem(id) {
    delete this.list[id]
    this.trigger(this.list)
  },

  removeAllItems() {
    this.list = {}
    this.trigger(this.list)
  },

  getList() {
    return this.list
  }
})

module.exports = ItemsStore
