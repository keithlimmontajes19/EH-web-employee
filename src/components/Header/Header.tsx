import {ReactElement} from 'react';

/* styles antd coreUI*/
import {theme} from 'utils/colors';
import {Headerstyles, StyledText} from './styled';
import {Layout, Badge} from 'antd';
import {CAvatar} from '@coreui/react';
import {Bell, User} from 'react-feather';

/* redux action */
import {useSelector} from 'react-redux';
import {TimeTextChecker} from 'utils/helpers';
import {RootState} from 'ducks/store';

const {Header} = Layout;

const ComponentHeader = (): ReactElement => {
  const {user_details}: any = useSelector<RootState>(
    (state) => state.authentication,
  );

  return (
    <Header style={Headerstyles}>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {/* TODO:
         * need to save user Timezone
         * to be able to check properly the time UTC on local machine
         */}
        <div style={{flex: 1}}>
          <StyledText>
            {TimeTextChecker()}, {user_details?.first_name}
          </StyledText>
        </div>
        <div style={{marginRight: 17}}>
          <Badge count={4} size="small">
            <Bell size={18} color={theme.ICONS} />
          </Badge>
        </div>

        <div>
          <CAvatar color="secondary" textColor="white" status="success">
            <User size={20} color={theme.WHITE} />
          </CAvatar>
        </div>
      </div>
    </Header>
  );
};

export default ComponentHeader;
