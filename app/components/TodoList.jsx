var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

// exports pure react component (not the connected version as below exports to default)
export var TodoList = React.createClass({
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
          <Todo key={todo.id} {...todo}/>
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

export default connect(
  // specify the state you need
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
