/* @flow */

/**
 * Creates an action that updates the value for the new item.
 */
export const NEW_ITEM_UPDATE = 'NEW_ITEM_UPDATE';
export default function updateNewItemAction(newItemValue: string): * {
  return {
    type: NEW_ITEM_UPDATE,
    value: newItemValue,
  };
}
