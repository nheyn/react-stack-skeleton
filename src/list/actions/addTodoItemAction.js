/* @flow */

/**
 * Add a new todo list item to the list.
 */
export const TODO_ITEMS_ADD = 'TODO_ITEMS_ADD';
export default function addTodoItemAction(newItemValue: string): * {
  return {
    type: TODO_ITEMS_ADD,
    value: newItemValue,
  };
}
