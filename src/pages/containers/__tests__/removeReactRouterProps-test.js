import React from 'react';
import renderer from 'react-test-renderer';

import removeReactRouterProps from '../removeReactRouterProps';

it('passes all the (non react-router) props added to its given Component.', () => {
  const mockProps = {
    test0: 0,
    test1: '1',
    test2: jest.fn(),
  };
  const TestComponent = removeReactRouterProps('div');
  const component = renderer.create(
    <TestComponent {...mockProps} />
  );
  const { props } = component.toJSON();

  for(let propsName in mockProps) {
    expect(props[propsName]).toEqual(mockProps[propsName]);
  }
});

it('removes the props added by react-router added to its given Component.', () => {
  const reactRouterPropMocks = {
    location: jest.fn(),
    params: jest.fn(),
    route: jest.fn(),
    router: jest.fn(),
    routeParams: jest.fn(),
    routes: jest.fn(),
  };
  const TestComponent = removeReactRouterProps('div');
  const component = renderer.create(
    <TestComponent {...reactRouterPropMocks} />
  );
  const { props } = component.toJSON();

  for(let propName in reactRouterPropMocks) {
    expect(props[propName]).toBeUndefined();
  }
});

it('removes the props added by react-router added to its given Component.', () => {
  const appDefinedPropMocks = {
    getScreenSize: jest.fn(),
  };
  const TestComponent = removeReactRouterProps('div');
  const component = renderer.create(
    <TestComponent {...appDefinedPropMocks} />
  );
  const { props } = component.toJSON();

  for(let propName in appDefinedPropMocks) {
    expect(props[propName]).toBeUndefined();
  }
})
