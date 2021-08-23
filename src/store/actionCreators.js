import {
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE,
  DELETE_TODO_ITEM,
} from "./actionTypes";

export const getChangeInputValueAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
export const getAddTodoItemAction = () => ({
  type: ADD_TODO_ITEM,
});
export const getDeleteTodoItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index,
});
