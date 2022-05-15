import React from 'react';
import {render} from '@testing-library/react-native';
import TeamQuizMultipleChoice from '../TeamQuizMultipleChoice';

describe('TeamQuizMultipleChoice', () => {
  it('Should work as expected', () => {
    const all = render(
        <TeamQuizMultipleChoice />
    );
    expect(all.toJSON()).toMatchSnapshot();
  });
});
