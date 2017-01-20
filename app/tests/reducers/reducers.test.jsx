var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cow'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todos', () => {
      var todos = [
        {
          id: '3',
          text: 'do this',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        },
        {
          id: '4',
          text: 'do that',
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: '4'
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[1].completed).toEqual(true);
      expect(res[1].completedAt).toNotEqual(undefined);
    });
  });
});
