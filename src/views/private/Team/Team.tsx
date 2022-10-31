import {ReactElement} from 'react';

import {FlexWrap, CardFolders, TitleHeader, TitleLabel} from './styled';

/* reducer action */
import {RootState} from 'ducks/store';
import {useSelector} from 'react-redux';

import Loading from 'components/Loading';
import PagesDetail from 'compositions/PagesDetail';
import FolderDetail from 'compositions/FolderDetail';
import CarouselAnnouncement from 'compositions/CarouselAnnouncement';

const Team = (): ReactElement => {
  const {data, loading}: any = useSelector<RootState>(
    (state) => state.dashboard,
  );

  const content = () => {
    return (
      <FlexWrap>
        <div style={{minWidth: 580, marginRight: 15}}>
          <CarouselAnnouncement />
        </div>

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
                        // <PagesDetail data={x?.item_pages} /> will check further
                        return <PagesDetail data={x} />;
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
