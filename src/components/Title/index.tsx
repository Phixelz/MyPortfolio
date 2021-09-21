import styles from './styles.module.scss'

interface TitleProps {
  title: string
  subtitle: string
  description: string
}

export function Title({ description, subtitle, title }: TitleProps) {
  return (
    <hgroup className={styles.wrapper}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <h5>{description}</h5>
    </hgroup>
  )
}