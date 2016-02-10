
const ShoppingList = require('./ShoppingList')
const React = require('react')

class Application extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <ShoppingList />
      </div>
    )
  }
}

 module.exports = Application
