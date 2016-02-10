
const ListItemDescription = require('./ListItemDescription')
const Actions = require('../actions/Actions')
const React = require('react')

class ListItem extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()

    Actions.removeItem(this.props.item.id)
  }

  render() {
    var item = this.props.item
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          {item.quantity} x {item.name}
        </div>

        {item.description.length > 0 ? <ListItemDescription description={item.description} /> : ''}

        <div className="panel-footer">
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <button type="submit" className="btn btn-default btn-xs">Remove</button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = ListItem
