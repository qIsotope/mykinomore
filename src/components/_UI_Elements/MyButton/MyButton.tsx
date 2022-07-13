import { FC, ReactNode } from 'react'
import styles from './myButtons.module.css'

interface IMyButton {
	children: ReactNode
	disabled?: boolean
	className?: string
	onClick?: () => void

}

export const MyButton: FC<IMyButton> = (props) => {
	return (
		<button className={styles.button} {...props} >
			{props.children}
		</button>
	)
}
