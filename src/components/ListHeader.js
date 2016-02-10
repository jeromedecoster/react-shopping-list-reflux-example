
const Actions = require('../actions/Actions')
const React = require('react')

class ListHeader extends React.Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()

    Actions.removeAllItems()
  }

  render() {
    var totalNumberOfListItems = this.props.totalNumberOfListItems

    if (totalNumberOfListItems > 0) {
      return (
        <form onSubmit={this.handleSubmit.bind(this)} className="form-inline">
          {this.props.totalNumberOfListItems + ' '}
          {totalNumberOfListItems === 1 ? 'item ' : 'items '}
          <button className="btn btn-xs btn-default" type="submit">Remove all</button>
        </form>
      )
    }

    return (<span>Shopping List</span>)
  }
}

module.exports = ListHeader
