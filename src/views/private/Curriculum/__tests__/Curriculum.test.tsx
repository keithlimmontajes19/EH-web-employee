import React from 'react';
import {render} from '@testing-library/react-native';
import Curriculum from '../Curriculum';

describe('Curriculum', () => {
  it('Should work as expected', () => {
    const all = render(
        <Curriculum />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
