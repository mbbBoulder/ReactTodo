var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do.</p>
        )        
      }
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
