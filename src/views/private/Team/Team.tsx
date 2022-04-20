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
  MainContainer,
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
import Loading from 'components/Loading';

import {Row, Col} from 'antd';

const Team = (props: PropsType): ReactElement => {
  const dispatch = useDispatch();
  const {data, loading}: any = useSelector<RootState>(
    (state) => state.dashboard,
  );

  useEffect(() => {
    dispatch(getDashboard());
    dispatch(getAnnouncements());
  }, []);

  const content = () => {
    return (
      <FlexWrap>
        <CardStyled>
          <Container>
            <IconImage source={ANNOUNCEMENT} height={124} width={124} />
          </Container>
          <LabelStyled>No Announcement</LabelStyled>
        </CardStyled>

        {(data || []).map((item) => {
          {
            /* (item?.boards || []) */
          }
          return (item?.boards || []).map((board: any) => {
            return (
              <CardFolders>
                <TitleHeader>
                  <TitleLabel>{board?.board_name}</TitleLabel>
                  <EllipsisOutlined style={{fontSize: 35}} />
                </TitleHeader>

                <div
                  style={{
                    minHeight: 360,
                    maxHeight: 360,
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                  }}>
                  <FlexWrap>
                    {(board?.board_items || []).map((folder) => {
                      if (folder?.item_type === 'page') {
                        // (folder?.item_pages || [])
                        return (folder?.item_pages || []).map((page: any) => {
                          return (
                            <Row>
                              <Col span={20}>
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                  }}>
                                  <MainContainer>
                                    <div
                                      style={{
                                        marginLeft: '35%',
                                        marginRight: '50%',
                                        marginTop: '30%',
                                        justifyContent: 'center',
                                      }}>
                                      <IconImage
                                        source={PAGE}
                                        height={41}
                                        width={33}
                                      />
                                    </div>
                                  </MainContainer>
                                  <p
                                    style={{
                                      textAlign: 'center',
                                      marginLeft: 30,
                                    }}>
                                    {page?.title}
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          );
                        });
                      } else {
                        return (
                          <Row>
                            <Col span={20}>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                }}>
                                <MainContainer>
                                  <div
                                    style={{
                                      marginLeft: '35%',
                                      marginRight: '50%',
                                      marginTop: '30%',
                                      justifyContent: 'center',
                                    }}>
                                    <IconImage
                                      source={FOLDER}
                                      height={41}
                                      width={33}
                                    />
                                  </div>
                                </MainContainer>
                                <p
                                  style={{
                                    textAlign: 'center',
                                    marginLeft: 30,
                                  }}>
                                  {folder?.title}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        );
                      }
                    })}
                  </FlexWrap>
                </div>
              </CardFolders>
            );
          });
        })}
      </FlexWrap>
    );
  };

  return loading ? <Loading /> : content();
};

export default Team;
