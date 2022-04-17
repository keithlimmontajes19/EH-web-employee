import React from 'react';
import {render} from '@testing-library/react-native';
import Header from '../Header';

describe('Header', () => {
  it('Should work as expected', () => {
    const all = render(
        <Header />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
