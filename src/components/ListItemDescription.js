
const React = require('react')

class ListItemDescription extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="panel-body">
        {this.props.description}
      </div>
    )
  }
}

module.exports = ListItemDescription
