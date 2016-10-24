import type React from 'react';

declare module "recompose" {
  declare export type HigherOrderComponent = (Component: React.Component<*, *, *>) => React.Component<*, *, *>;

  declare export function withProps<I, P>(props: P | (initialProps: I) => P): HigherOrderComponent;
  declare export function mapProps<I, P>(propsMap: (initialProps: I) => P): HigherOrderComponent;
  declare export function defaultProps<P>(props: P): HigherOrderComponent;
  declare export function flattenProp(propName: string): HigherOrderComponent;
  declare export function withContext(contextTypes: Object, getContext: (props:Object) => Object): HigherOrderComponent;
  declare export function getContext(contextTypes: Object): HigherOrderComponent;
  declare export function lifecycle(spec: Object): HigherOrderComponent;
  declare export function withState(
    stateName: string,
    stateUpdaterName: string,
    initialState: any | ((props: Object) => any),
  ): HigherOrderComponent;
  declare export function withReducer<S, A>(
    stateName: string,
    dispatchName: string,
    reducer: (state: S, action: A) => S,
    initialState: S
  ): HigherOrderComponent
  declare export var toClass: HigherOrderComponent;

  declare export function compose(...functions: Array<HigherOrderComponent>): HigherOrderComponent;
}