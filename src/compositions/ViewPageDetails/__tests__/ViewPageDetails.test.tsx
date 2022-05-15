import React from 'react';
import {render} from '@testing-library/react-native';
import ViewPageDetails from '../ViewPageDetails';

describe('ViewPageDetails', () => {
  it('Should work as expected', () => {
    const all = render(
        <ViewPageDetails />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
