import {useQuery} from 'react-query'
import {useNavigate} from 'react-router-dom'
import {getUser} from 'api/usersAPI'
import {SearchOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Badge} from 'antd'
import {AvatarContainer, BellContainer, HeaderStyled, SearchContainer, SearchInput, SearchStyles} from './styled'

import premierAutomotiveLogo from 'assets/images/premier-automotive-logo.png'
import ICON_BELL from 'assets/icons/bell-blue.png'
import IconImage from 'components/IconImage'
import PopoverProfile from 'compositions/PopoverProfile'

import styles from './MainLayoutHeader.module.css'

export default function MainLayoutHeader() {
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId')
  if (!userId) navigate('/logout')

  const {isLoading, isError, error, data: user} = useQuery(`users/${userId}`, getUser, {
    select: response => response.data.data
  })

  return <HeaderStyled>
    <img className={`${styles.companyLogo}`} src={premierAutomotiveLogo} />

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

    <PopoverProfile name={`${user?.profile?.firstName} ${user?.profile?.lastName}`} organization="Organization" src={user?.profile?.avatar || <UserOutlined />}>
      <AvatarContainer>
        <Avatar
          size={50}
          src={user?.profile?.avatar || <UserOutlined />}
        />
      </AvatarContainer>
    </PopoverProfile>
  </HeaderStyled>
}
