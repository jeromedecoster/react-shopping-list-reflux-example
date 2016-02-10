
const ItemsStore = require('../stores/ItemsStore')
const AddListItem = require('./AddListItem')
const List = require('./List')
const React = require('react')

class ShoppingList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: ItemsStore.getList()
    }
  }

  updateState(newList) {
    this.setState({list:newList})
  }

  componentDidMount() {
    this.unsubscribe = ItemsStore.listen(this.updateState.bind(this))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    var items = this.state.list

    return (
      <div className="row">
        <div className="col-sm-6">

          <List items={items} />

        </div>
        <div className="col-sm-6">

          <AddListItem />

        </div>
      </div>
    )
  }
}

module.exports = ShoppingList
