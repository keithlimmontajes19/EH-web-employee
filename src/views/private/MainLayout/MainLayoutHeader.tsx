import {SearchOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Badge} from 'antd'
import {AvatarContainer, BellContainer, HeaderStyled, SearchContainer, SearchInput, SearchStyles} from './styled'

import ICON_BELL from 'assets/icons/bell-blue.png'
import IconImage from 'components/IconImage'
import PopoverProfile from 'compositions/PopoverProfile'

export default function MainLayoutHeader() {
  return <HeaderStyled>
    <SearchContainer>
      <SearchInput
        placeholder="Search for anything"
        prefix={<SearchOutlined style={SearchStyles} />}
      />
    </SearchContainer>

    <BellContainer>
      <Badge dot={true}>
        <IconImage width={19} height={22} source={ICON_BELL} />
      </Badge>
    </BellContainer>

    <PopoverProfile name="Keith Lim Montajes" organization="Organization">
      <AvatarContainer>
        <Avatar size={50} icon={<UserOutlined />} />
      </AvatarContainer>
    </PopoverProfile>
  </HeaderStyled>
}
