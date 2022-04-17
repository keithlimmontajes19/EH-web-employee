import {ReactElement, useEffect} from 'react';
import type {PropsType} from './types';

import {
  FlexWrap,
  Container,
  CardStyled,
  LabelStyled,
  CardFolders,
  TitleHeader,
  TitleLabel,
  FolderContainer,
} from './styled';

import {EllipsisOutlined} from '@ant-design/icons';

import IconImage from 'components/IconImage';
import ANNOUNCEMENT from 'assets/icons/announcement.png';
import PAGE from 'assets/icons/page.png';
import QUIZ from 'assets/icons/quiz.png';
import FOLDER from 'assets/icons/folder.png';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector, useDispatch} from 'react-redux';
import {getDashboard} from 'ducks/dashboard/actionCreator';
import {getAnnouncements} from 'ducks/announcement/actionCreator';
import Label from 'components/Label';

const Team = (props: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const {data, loading}: any = useSelector<RootState>(
    (state) => state.dashboard,
  );

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getAnnouncements());
  }, []);

  return (
    <>
      <CardStyled>
        <Container>
          <IconImage source={ANNOUNCEMENT} height={124} width={124} />
        </Container>
        <LabelStyled>No Announcement</LabelStyled>
      </CardStyled>

      <FlexWrap>
        {(data || []).map((item) => {
          return (item?.boards || []).map((board) => {
            return (
              <CardFolders>
                <TitleHeader>
                  <TitleLabel>{board?.board_name}</TitleLabel>
                  <EllipsisOutlined style={{fontSize: 35}} />
                </TitleHeader>

                <FlexWrap>
                  {(board?.board_items || []).map((folder) => {
                    if (folder?.item_type === 'page') {
                      return (folder?.item_pages || []).map((page) => {
                        return (
                          <FolderContainer>
                            <div
                              style={{marginLeft: 'auto', marginRight: 'auto'}}>
                              <IconImage source={PAGE} height={41} width={33} />
                            </div>
                          </FolderContainer>
                        );
                      });
                    } else {
                      return (
                        <FolderContainer>
                          <div
                            style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <IconImage source={FOLDER} height={41} width={33} />
                          </div>
                        </FolderContainer>
                      );
                    }
                  })}
                </FlexWrap>
              </CardFolders>
            );
          });
        })}
      </FlexWrap>
    </>
  );
};

export default Team;
