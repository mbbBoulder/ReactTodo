var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        },
        {
          id: 2,
          text: 'Clean yard'
        },
        {
          id: 3,
          text: 'Walk dog again'
        },
        {
          id: 4,
          text: 'Clean yard again'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
