import {useEffect} from 'react'
import {faUser, faBuilding, faGraduationCap, faVideo, faPollH, faFile} from '@fortawesome/free-solid-svg-icons'
import styles from './HomeInfo.module.css'
import HomeInfoItem from './HomeInfoItem/HomeInfoItem'

export default function HomeInfo() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function () {
      const ele = document.getElementById('info-items');
      ele.style.cursor = 'grab';

      let pos = { top: 0, left: 0, x: 0, y: 0 };

      const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      };

      const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
      };

      const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };

      // Attach the handler
      ele.addEventListener('mousedown', mouseDownHandler);
    });
  }, [])

  return <div className={styles['home-info']}>
    <ul id="info-items" className={styles['home-info__items']}>
      <HomeInfoItem icon={faUser} title="Employees" count="50" />
      <HomeInfoItem icon={faBuilding} title="Organizations" count="10" />
      <HomeInfoItem icon={faGraduationCap} title="Courses" count="45" />
      <HomeInfoItem icon={faVideo} title="Videos" count="25" />
      <HomeInfoItem icon={faPollH} title="Surveys" count="11" />
      <HomeInfoItem icon={faFile} title="Pages" count="110" />
    </ul>
  </div>
}
