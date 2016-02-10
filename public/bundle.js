(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Reflux = require('reflux');

var Actions = Reflux.createActions(['addItem', 'removeItem', 'removeAllItems']);

module.exports = Actions;

},{"reflux":"reflux"}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actions = require('../actions/Actions');
var React = require('react');
var uid = require('uid');

var styleRequired = {
  color: "#ffaaaa"
};

var AddListItem = function (_React$Component) {
  _inherits(AddListItem, _React$Component);

  function AddListItem(props) {
    _classCallCheck(this, AddListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AddListItem).call(this, props));
  }

  _createClass(AddListItem, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var item = {
        id: uid(),
        date: new Date(),
        name: this.refs.name.value.trim(),
        description: this.refs.description.value.trim(),
        quantity: this.refs.quantity.value
      };

      Actions.addItem(item);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit.bind(this) },
        React.createElement(
          'h3',
          { className: 'page-header' },
          'Add New Item'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'listItemName' },
            'Name ',
            React.createElement(
              'span',
              { style: styleRequired },
              '*'
            )
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'listItemName', placeholder: 'Enter name', required: true, ref: 'name' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'listItemDescription' },
            'Description'
          ),
          React.createElement('textarea', { className: 'form-control', rows: '3', id: 'listItemDescription', placeholder: 'Enter description', ref: 'description' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'listItemQuantity' },
            'Quantity ',
            React.createElement(
              'span',
              { style: styleRequired },
              '*'
            )
          ),
          React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-xs-5 col-sm-6 col-md-4' },
              React.createElement('input', { type: 'number', min: '1', max: '9999', step: '1', defaultValue: '1', className: 'form-control', id: 'listItemQuantity', required: true, ref: 'quantity' })
            )
          )
        ),
        React.createElement('hr', null),
        React.createElement(
          'button',
          { type: 'submit', className: 'btn btn-primary' },
          'Add to list'
        ),
        React.createElement(
          'button',
          { type: 'reset', className: 'btn btn-link' },
          'Cancel'
        )
      );
    }
  }]);

  return AddListItem;
}(React.Component);

module.exports = AddListItem;

},{"../actions/Actions":1,"react":"react","uid":"uid"}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShoppingList = require('./ShoppingList');
var React = require('react');

var Application = function (_React$Component) {
  _inherits(Application, _React$Component);

  function Application(props) {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Application).call(this, props));
  }

  _createClass(Application, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(ShoppingList, null)
      );
    }
  }]);

  return Application;
}(React.Component);

module.exports = Application;

},{"./ShoppingList":9,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var EmptyList = function (_React$Component) {
  _inherits(EmptyList, _React$Component);

  function EmptyList(props) {
    _classCallCheck(this, EmptyList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmptyList).call(this, props));
  }

  _createClass(EmptyList, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        'There are no items in your list.'
      );
    }
  }]);

  return EmptyList;
}(React.Component);

module.exports = EmptyList;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListHeader = require('./ListHeader');
var EmptyList = require('./EmptyList');
var ListItem = require('./ListItem');
var React = require('react');

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List(props) {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));
  }

  _createClass(List, [{
    key: 'getListOfItemIds',
    value: function getListOfItemIds(items) {
      return Object.keys(items);
    }
  }, {
    key: 'getTotalNumberOfListItems',
    value: function getTotalNumberOfListItems(items) {
      var totalNumberOfItems = 0;
      var item;

      this.getListOfItemIds(items).forEach(function (itemId) {
        item = items[itemId];
        totalNumberOfItems = totalNumberOfItems + parseInt(item.quantity, 10);
      });

      return totalNumberOfItems;
    }
  }, {
    key: 'createListItemElements',
    value: function createListItemElements(items) {
      var item;

      return this.getListOfItemIds(items).map(function createListItemElement(itemId) {
        item = items[itemId];
        return React.createElement(ListItem, { item: item, handleRemoveListItem: this.props.removeListItem, key: item.id });
      }.bind(this)).reverse();
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.items;
      var listItemElements = this.createListItemElements(items);

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          { className: 'page-header' },
          React.createElement(ListHeader, { totalNumberOfListItems: this.getTotalNumberOfListItems(items) })
        ),
        React.createElement(
          'ul',
          null,
          listItemElements.length > 0 ? listItemElements : React.createElement(EmptyList, null)
        )
      );
    }
  }]);

  return List;
}(React.Component);

module.exports = List;

},{"./EmptyList":4,"./ListHeader":6,"./ListItem":7,"react":"react"}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actions = require('../actions/Actions');
var React = require('react');

var ListHeader = function (_React$Component) {
  _inherits(ListHeader, _React$Component);

  function ListHeader(props) {
    _classCallCheck(this, ListHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListHeader).call(this, props));
  }

  _createClass(ListHeader, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      Actions.removeAllItems();
    }
  }, {
    key: 'render',
    value: function render() {
      var totalNumberOfListItems = this.props.totalNumberOfListItems;

      if (totalNumberOfListItems > 0) {
        return React.createElement(
          'form',
          { onSubmit: this.handleSubmit.bind(this), className: 'form-inline' },
          this.props.totalNumberOfListItems + ' ',
          totalNumberOfListItems === 1 ? 'item ' : 'items ',
          React.createElement(
            'button',
            { className: 'btn btn-xs btn-default', type: 'submit' },
            'Remove all'
          )
        );
      }

      return React.createElement(
        'span',
        null,
        'Shopping List'
      );
    }
  }]);

  return ListHeader;
}(React.Component);

module.exports = ListHeader;

},{"../actions/Actions":1,"react":"react"}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemDescription = require('./ListItemDescription');
var Actions = require('../actions/Actions');
var React = require('react');

var ListItem = function (_React$Component) {
  _inherits(ListItem, _React$Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, props));
  }

  _createClass(ListItem, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      Actions.removeItem(this.props.item.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var item = this.props.item;
      return React.createElement(
        'div',
        { className: 'panel panel-primary' },
        React.createElement(
          'div',
          { className: 'panel-heading' },
          item.quantity,
          ' x ',
          item.name
        ),
        item.description.length > 0 ? React.createElement(ListItemDescription, { description: item.description }) : '',
        React.createElement(
          'div',
          { className: 'panel-footer' },
          React.createElement(
            'form',
            { className: 'form-inline', onSubmit: this.handleSubmit.bind(this) },
            React.createElement(
              'button',
              { type: 'submit', className: 'btn btn-default btn-xs' },
              'Remove'
            )
          )
        )
      );
    }
  }]);

  return ListItem;
}(React.Component);

module.exports = ListItem;

},{"../actions/Actions":1,"./ListItemDescription":8,"react":"react"}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var ListItemDescription = function (_React$Component) {
  _inherits(ListItemDescription, _React$Component);

  function ListItemDescription(props) {
    _classCallCheck(this, ListItemDescription);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItemDescription).call(this, props));
  }

  _createClass(ListItemDescription, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "panel-body" },
        this.props.description
      );
    }
  }]);

  return ListItemDescription;
}(React.Component);

module.exports = ListItemDescription;

},{"react":"react"}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ItemsStore = require('../stores/ItemsStore');
var AddListItem = require('./AddListItem');
var List = require('./List');
var React = require('react');

var ShoppingList = function (_React$Component) {
  _inherits(ShoppingList, _React$Component);

  function ShoppingList(props) {
    _classCallCheck(this, ShoppingList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingList).call(this, props));

    _this.state = {
      list: ItemsStore.getList()
    };
    return _this;
  }

  _createClass(ShoppingList, [{
    key: 'updateState',
    value: function updateState(newList) {
      this.setState({ list: newList });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = ItemsStore.listen(this.updateState.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.state.list;

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-sm-6' },
          React.createElement(List, { items: items })
        ),
        React.createElement(
          'div',
          { className: 'col-sm-6' },
          React.createElement(AddListItem, null)
        )
      );
    }
  }]);

  return ShoppingList;
}(React.Component);

module.exports = ShoppingList;

},{"../stores/ItemsStore":11,"./AddListItem":2,"./List":5,"react":"react"}],10:[function(require,module,exports){
'use strict';

var Application = require('./components/Application');
var ReactDOM = require('react-dom');
var React = require('react');

ReactDOM.render(React.createElement(Application, null), document.querySelector('[data-react-application]'));

},{"./components/Application":3,"react":"react","react-dom":"react-dom"}],11:[function(require,module,exports){
'use strict';

var Actions = require('../actions/Actions');
var Reflux = require('reflux');

var ItemsStore = Reflux.createStore({

  listenables: Actions,

  init: function init() {
    this.list = {};
  },
  addItem: function addItem(item) {
    this.list[item.id] = item;
    this.trigger(this.list);
  },
  removeItem: function removeItem(id) {
    delete this.list[id];
    this.trigger(this.list);
  },
  removeAllItems: function removeAllItems() {
    this.list = {};
    this.trigger(this.list);
  },
  getList: function getList() {
    return this.list;
  }
});

module.exports = ItemsStore;

},{"../actions/Actions":1,"reflux":"reflux"}]},{},[10]);
