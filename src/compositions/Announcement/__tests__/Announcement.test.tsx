import React from 'react';
import {render} from '@testing-library/react-native';
import Announcement from '../Announcement';

describe('Announcement', () => {
  it('Should work as expected', () => {
    const all = render(
        <Announcement />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
