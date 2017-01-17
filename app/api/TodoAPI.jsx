var $ = require('jQuery');
module.exports = {
  setTodos: function(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }

  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      var todos = JSON.parse(stringTodos);
    } catch (err) {
      // Use default array from above.
    }

    return $.isArray(todos) ? todos : [];
  }
}
