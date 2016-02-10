
const React = require('react')

class EmptyList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        There are no items in your list.
      </div>
    )
  }
}

module.exports = EmptyList
