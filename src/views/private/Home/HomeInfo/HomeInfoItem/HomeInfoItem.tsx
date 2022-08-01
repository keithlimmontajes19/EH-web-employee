import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './HomeInfoItem.module.css'

export default function HomeInfoItem({icon, count, title}) {
  return <li className={styles['item']}>
    <div className={styles['item-icon']}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className={styles['item-description']}>
      <span className={styles['item-description__count']}>{count}</span>
      <span className={styles['item-description__title']}>{title}</span>
    </div>
  </li>
}
