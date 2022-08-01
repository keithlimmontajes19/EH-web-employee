import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faBuilding} from '@fortawesome/free-solid-svg-icons'
import styles from './HomeHeader.module.css'

export default function HomeHeader() {
  return <div className={styles['home-header']}>
    <h2 className={styles['home-header__greeting']}>Hi Mavis!</h2>
    <div className={styles['home-header__add']}>
      {/* <p>View List</p> */}
      <div className={styles['home-header__dropdown']} style={{float: 'right'}}>
        <button className={styles['home-header__dropdown-button']}>ADD <span className={styles['caret-down']}>&#5167;</span></button>
        <div className={styles['home-header__dropdown-content']}>
          <p className={styles['home-header__dropdown-content-option']}>
            <span><FontAwesomeIcon icon={faUser} /></span>
            <span>User</span>
          </p>
          <p className={styles['home-header__dropdown-content-option']}>
            <span><FontAwesomeIcon icon={faBuilding} /></span>
            <span>Organization</span>
          </p>
        </div>
      </div>
    </div>
  </div>
}
