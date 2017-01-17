var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should add todos to localStorage', () => {
      var testTodos = [{
        text: 'foo',
        id: 1,
        completed: false
      }];
      TodoAPI.setTodos(testTodos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(testTodos);
    });
  });

  describe('getTodos', () => {
    it('should retrieve todos', () => {
      var testTodo = {
        text: 'foo',
        id: 1,
        completed: false
      };
      TodoAPI.setTodos([testTodo]);
      var isTodos = TodoAPI.getTodos();
      expect(isTodos).toEqual([testTodo]);
    });
  });
});
