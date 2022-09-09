import {useEffect} from 'react';
import {useNavigate, Router, Outlet} from 'react-router-dom';

/* styles utils*/
import {notificationAlert} from 'utils/alerts';
// import history from 'utils/history';

/* components */
// import MainLayout from 'views/private/MainLayout';
// import LoginLayout from 'views/public/LoginLayout';

/* reducer action */
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from 'ducks/store';
import {closeNotification} from 'ducks/alert/actionCreator';
// import {getUserDetails} from 'ducks/authentication/actionCreator';

export default function Layout() {
  const dispatch = useDispatch()
  const {alert}: any = useSelector<RootState>((state) => state)

  useEffect(() => {
    alert.onShow &&
      notificationAlert(alert.type, alert.message, () => dispatch(closeNotification()))
  }, [alert])

  return <Outlet />
}
