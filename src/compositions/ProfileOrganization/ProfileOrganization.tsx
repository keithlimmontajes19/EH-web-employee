import {useNavigate} from 'react-router'
import {useQuery} from 'react-query'
import {getUserOrganizations} from 'api/usersAPI'
import ORGANIZATION_ICON from 'assets/icons/organization.png'
import styles from './ProfileOrganization.module.css'

export default function ProfileOrganization() {
  const navigate = useNavigate()

  const userId = localStorage.getItem('userId')
  if (!userId) navigate('/logout')

  const {isLoading, isError, error, data: organizations} = useQuery(`users/${userId}/organizations`, getUserOrganizations, {
    select: response => response.data.data
  })

  return <div className={`${styles.container}`}>
    <div className={`${styles.header}`}>
      <h2 className={`${styles.title}`}>My Organizations</h2>
    </div>
    <div className={`${styles.organizationsContainer}`}>
      {!isLoading && organizations.map((organization) => <div className={`${styles.organizationContainer}`}>
        <img
          className={`${styles.organizationAvatar} ${!organization.avatar && styles.scaleDown}`}
          src={!isLoading && organization.avatar || ORGANIZATION_ICON}
        />
        <h3 className={`${styles.organizationName}`}>{organization.name}</h3>
      </div>)}
    </div>
  </div>
}
