import {ReactElement, useState} from 'react';
import type {PropsType} from './types';

import {
  Container,
  SubContainer,
  ButtonNextStyles,
  ButtonBackStyles,
} from './styled';
import {Button, Col} from 'antd';

/* quiz forms */
import QuizSort from 'compositions/QuizSort';
import QuizEssay from 'compositions/QuizEssay';
import QuizFIllBlanks from 'compositions/QuizFIllBlanks';
import QuizSingleChoice from 'compositions/QuizSingleChoice';
import QuizMultiplechoice from 'compositions/QuizMultiplechoice';

/* components */
import CurriculumLayout from 'compositions/CurriculumLayout';

const QuizStepper = ({data}: PropsType): ReactElement => {
  const [active, setActive] = useState(0);

  const forms = (item: any, type: string) => {
    switch (type) {
      case 'essay':
        return <QuizEssay item={item} />;
      case 'single-choice':
        return <QuizSingleChoice item={item} />;
      case 'multiple-choice':
        return <QuizMultiplechoice item={item} />;
      case 'sorting':
        return <QuizSort item={item} />;
      case 'fill-in-the-blanks':
        return <QuizFIllBlanks item={item} />;
      default:
        return <></>;
    }
  };

  const content = () => {
    if (active === 0) {
      return (
        <CurriculumLayout
          data={data}
          type="quiz"
          onClick={() => setActive(active + 1)}
        />
      );
    } else {
      return (
        <Container>
          <SubContainer>
            {(data?.questions || []).map((item, index) => (
              <div key={item?._id}>
                {index + 1 === active && forms(item, item?.questionType)}
              </div>
            ))}
          </SubContainer>

          {(data?.questions || []).length === active ? (
            <Col offset={20} style={{marginTop: 49}}>
              <Button
                style={ButtonNextStyles}
                onClick={() => console.log('finish')}>
                Finish
              </Button>
            </Col>
          ) : (
            <Col offset={17} style={{marginTop: 49}}>
              <Button
                style={ButtonBackStyles}
                onClick={() => setActive(active - 1)}>
                Back
              </Button>
              <Button
                style={ButtonNextStyles}
                onClick={() => setActive(active + 1)}>
                Next
              </Button>
            </Col>
          )}
        </Container>
      );
    }
  };

  return content();
};

export default QuizStepper;
