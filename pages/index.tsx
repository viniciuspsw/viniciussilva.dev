import Image from 'next/image'
import Head from 'next/head'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Home.module.scss'
import MePhoto from '../public/me.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinícius Silva</title>
        <meta name="description" content="Full-Stack Software Developer" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.container}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.me}>
              <Image src={MePhoto} alt="That's me!" className={styles.mePhoto} width={160} height={160} />
              <h1 className={styles.meName}>Vinícius Silva</h1>
              <h4 className={styles.meHeadline}>Full-Stack Software Developer</h4>
              <p className={styles.meDescription}>
                I&apos;m a brazilian Software Developer in love with NodeJS and ReactJS. Currently studying Golang but
                always trying new things and looking for challenges 🚀
              </p>
            </div>
            <div className={styles.socials}>
              <a
                href="https://github.com/viniciuspsw"
                target="_blank"
                className={styles.socialsButton}
                title="Github"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} width={30} />
              </a>
              <a
                href="https://linkedin.com/in/viniciusps"
                target="_blank"
                className={styles.socialsButton}
                title="LinkedIn"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} width={30} />
              </a>
              <a
                href="mailto:viniciuspsw@gmail.com"
                target="_blank"
                className={styles.socialsButton}
                title="E-mail me"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelopeSquare} width={30} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
