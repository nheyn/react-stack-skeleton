/* @flow */

/**
 * Set the status of the given item as complete.
 */
export const TODO_ITEMS_MARK_ACTIVE = 'TODO_ITEMS_MARK_ACTIVE';
export default function setItemAsActiveAction(itemIndex: number): * {
  return {
    type: TODO_ITEMS_MARK_ACTIVE,
    itemIndex,
  };
}
