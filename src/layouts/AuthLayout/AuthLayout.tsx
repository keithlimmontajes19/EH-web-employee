import styles from './AuthLayout.module.css'

const {background, container} = styles

export function AuthLayout(props) {
  return <div className={`${background} ${container}`}>
    {props.children}
  </div>
}
