import React from 'react';
import {render} from '@testing-library/react-native';
import PagesDetail from '../PagesDetail';

describe('PagesDetail', () => {
  it('Should work as expected', () => {
    const all = render(
        <PagesDetail />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
