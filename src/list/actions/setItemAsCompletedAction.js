/* @flow */

/**
 * Set the status of the given item as complete.
 */
export const TODO_ITEMS_MARK_COMPLETE = 'TODO_ITEMS_MARK_COMPLETE';
export default function setItemAsCompletedAction(itemIndex: number): * {
  return {
    type: TODO_ITEMS_MARK_COMPLETE,
    itemIndex,
  };
}
