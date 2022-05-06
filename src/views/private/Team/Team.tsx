import {ReactElement} from 'react';

import {
  FlexWrap,
  Container,
  CardStyled,
  LabelStyled,
  CardFolders,
  TitleHeader,
  TitleLabel,
} from './styled';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

import Loading from 'components/Loading';
import IconImage from 'components/IconImage';
import PagesDetail from 'compositions/PagesDetail';
import FolderDetail from 'compositions/FolderDetail';
import ANNOUNCEMENT from 'assets/icons/announcement.png';

import Announcement from 'compositions/Announcement';

const Team = (): ReactElement => {
  const {data, loading}: any = useSelector<RootState>(
    (state) => state.dashboard,
  );

  const content = () => {
    return (
      <FlexWrap>
        <Announcement />

        {(data || []).map((item) => {
          return (item?.boards || []).map((board: any) => {
            return (
              <CardFolders key={board?._id}>
                <TitleHeader>
                  <TitleLabel>{board?.board_name}</TitleLabel>
                </TitleHeader>
                <div
                  style={{
                    minHeight: 360,
                    maxHeight: 360,
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                  }}>
                  <FlexWrap>
                    {(board?.board_items || []).map((x) => {
                      if (x?.item_type === 'page') {
                        return <PagesDetail data={x?.item_pages} />;
                      } else {
                        return <FolderDetail item={x} />;
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
