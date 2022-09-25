import {useQuery} from 'react-query'
import {getOrganizationMembersFactory} from 'api/organizationsAPI'
import USER_ICON from 'assets/images/user-icon.png'
import styles from './OrganizationMembers.module.css'

export function OrganizationMembers({organizationId}) {
  const {isLoading, isError, error, data: members} = useQuery(`organizations/${organizationId}/members`, getOrganizationMembersFactory(organizationId), {
    select: response => response.data.data
  })

  if (!isLoading) console.log(members)

  return <div className={`${styles.container}`}>
    <h3 className={`${styles.title}`}>Members</h3>
    <div className={`${styles.membersContainer}`}>
      {!isLoading && members.map((member) => <div className={`${styles.memberContainer}`}>
        {member.avatar && <img className={`${styles.memberAvatar}`} src={member.avatar}  alt="organization member" />}
        {!member.avatar && <img className={`${styles.defaultAvatar}`} src={USER_ICON}  alt="organization member" />}
        <div className={`${styles.memberInfo}`}>
          <h4 className={`${styles.memberName}`}>{member.name}</h4>
          <p className={`${styles.memberPosition}`}>{member.position}</p>
        </div>
      </div>)}
    </div>
  </div>
}
