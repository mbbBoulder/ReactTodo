var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          // spread operator, passes every prop on todo as its own prop
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });

    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
