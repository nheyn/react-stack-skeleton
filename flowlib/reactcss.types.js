import { HigherOrderComponent } from 'recompose';

declare module "reactcss" {
  declare export type CssObject = Object;
  declare export type CssObjects = {[key: string]: {[key: string]: CssObject}};

  declare export var hover: HigherOrderComponent;
  declare export default (classes: CssObjects, ...activations: Array<Object>) => CssObject;
}