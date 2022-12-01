import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <h2 className="underline font-bold">HOME CONTENT</h2>
      </div>
    </>
  )
}
