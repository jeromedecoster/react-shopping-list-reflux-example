
const ListHeader = require('./ListHeader')
const EmptyList = require('./EmptyList')
const ListItem = require('./ListItem')
const React = require('react')

class List extends React.Component {

  constructor(props) {
    super(props)
  }

  getListOfItemIds(items) {
    return Object.keys(items)
  }

  getTotalNumberOfListItems(items) {
    var totalNumberOfItems = 0
    var item

    this.getListOfItemIds(items).forEach(function (itemId) {
      item = items[itemId]
      totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10)
    })

    return totalNumberOfItems
  }

  createListItemElements(items) {
    var item

    return (
      this
      .getListOfItemIds(items)
      .map(function createListItemElement(itemId) {
        item = items[itemId]
        return (<ListItem item={item} handleRemoveListItem={this.props.removeListItem} key={item.id} />)
      }.bind(this))
      .reverse()
    )
  }

  render() {
    var items = this.props.items
    var listItemElements = this.createListItemElements(items)

    return (
      <div>
        <h3 className="page-header">

          <ListHeader totalNumberOfListItems={this.getTotalNumberOfListItems(items)} />

        </h3>
        <ul>

          {listItemElements.length > 0 ? listItemElements : <EmptyList />}

        </ul>
      </div>
    )
  }
}

module.exports = List
