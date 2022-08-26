import {useParams, useNavigate} from 'react-router'
import {useQuery} from 'react-query'
import {getSingleOrganizationFactory} from 'api/organizationsAPI'
import {OrganizationMembers} from './OrganizationMembers'
import ORGANIZATION_ICON from 'assets/icons/organization.png'
import styles from './Organization.module.css'

export function Organization() {
  const navigate = useNavigate()
  const params = useParams()

  const {isLoading, isError, error, data: organization} = useQuery(`organizations/${params.organizationId}/`, getSingleOrganizationFactory(params.organizationId), {
    select: response => response.data.data
  })

  return <div className={`${styles.container}`}>
    <div className={`${styles.header}`}>
      <div className={`${styles.organizationProfile}`}>
        <img className={`${styles.organizationAvatar}`} src={organization?.avatar || ORGANIZATION_ICON} alt="organization avatar" />
        <div className={`${styles.organizationInfo}`}>
          <h3 className={`${styles.organizationName}`}>{organization?.name}</h3>
          <p className={`${styles.organizationMembersCount}`}>Members: {organization?.member_count}</p>
        </div>
      </div>
      <p className={`${styles.organizationDescription}`}>{organization?.description}</p>
    </div>
    <OrganizationMembers organizationId={params.organizationId}/>
  </div>
}
