import {useState, useRef} from 'react'
import {faUser, faBuilding, faGraduationCap, faVideo, faPollH, faFile} from '@fortawesome/free-solid-svg-icons'
import styles from './HomeInfo.module.css'
import HomeInfoItem from './HomeInfoItem/HomeInfoItem'

export default function HomeInfo() {
  const itemsRef: any = useRef()
  const [clientX, setClientX] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const onMouseDown = (e) => {
    setIsScrolling(true)
    setClientX(e.clientX)
  }

  const onMouseUp = () => {
    setIsScrolling(false)
  }

  const onMouseMove = (e) => {
    if (isScrolling) {
      itemsRef.current.scrollLeft += clientX - e.clientX
    }
  }

  return <div className={styles['home-info']}>
    <ul className={styles['home-info__items']}
      ref={itemsRef}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <HomeInfoItem icon={faUser} title="Employees" count="50" />
      <HomeInfoItem icon={faBuilding} title="Organizations" count="10" />
      <HomeInfoItem icon={faGraduationCap} title="Courses" count="45" />
      <HomeInfoItem icon={faVideo} title="Videos" count="25" />
      <HomeInfoItem icon={faPollH} title="Surveys" count="11" />
      <HomeInfoItem icon={faFile} title="Pages" count="110" />
    </ul>
  </div>
}
