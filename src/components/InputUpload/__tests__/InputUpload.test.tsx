import React from 'react';
import {render} from '@testing-library/react-native';
import InputUpload from '../InputUpload';

describe('InputUpload', () => {
  it('Should work as expected', () => {
    const all = render(
        <InputUpload />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
