import React from 'react';
import {render} from '@testing-library/react-native';
import Menus from '../Menus';

describe('Menus', () => {
  it('Should work as expected', () => {
    const all = render(
        <Menus />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
