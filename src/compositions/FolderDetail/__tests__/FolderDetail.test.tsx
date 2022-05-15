import React from 'react';
import {render} from '@testing-library/react-native';
import FolderDetail from '../FolderDetail';

describe('FolderDetail', () => {
  it('Should work as expected', () => {
    const all = render(
        <FolderDetail />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
