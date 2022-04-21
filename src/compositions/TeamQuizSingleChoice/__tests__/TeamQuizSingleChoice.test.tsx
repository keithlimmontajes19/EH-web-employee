import React from 'react';
import {render} from '@testing-library/react-native';
import TeamQuizSingleChoice from '../TeamQuizSingleChoice';

describe('TeamQuizSingleChoice', () => {
  it('Should work as expected', () => {
    const all = render(
        <TeamQuizSingleChoice />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
