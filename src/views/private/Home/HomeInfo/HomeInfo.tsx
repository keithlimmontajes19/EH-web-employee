import {faUser, faBuilding, faGraduationCap, faVideo, faPollH, faFile} from '@fortawesome/free-solid-svg-icons'
import styles from './HomeInfo.module.css'
import HomeInfoItem from './HomeInfoItem/HomeInfoItem'

export default function HomeInfo() {

  return <div className={styles['home-info']}>
    <ul className={styles['home-info__items']}>
      <HomeInfoItem icon={faUser} title="Employees" count="50" />
      <HomeInfoItem icon={faBuilding} title="Organizations" count="10" />
      <HomeInfoItem icon={faGraduationCap} title="Courses" count="45" />
      <HomeInfoItem icon={faVideo} title="Videos" count="25" />
      <HomeInfoItem icon={faPollH} title="Surveys" count="11" />
      <HomeInfoItem icon={faFile} title="Pages" count="110" />
    </ul>
  </div>
}
