/* @flow */
type Selector<S, R> = (state: S, ...args: Array<any>) => R;

/**
 * Update a selecto get a state from a diven store.
 *
 * NOTE: The state (which is changed) must be the first arguement, other arguments will be preserved
 */
export default function selectFrom<S, R>(storeName: string, selector: Selector<S, R>): Selector<Object, R> {
  return (state, ...args) => {
    if(!state[storeName]) throw new Error(`Reducer[${storeName}] is not in the redux state`);

    const currState = state[storeName];
    return selector(currState, ...args);
  };
}
