import styles from './alert.module.css'
import cn from 'classnames'
import {ReactNode} from "react";

export default function Alert({ children, type }:{children: ReactNode, type: string}) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}