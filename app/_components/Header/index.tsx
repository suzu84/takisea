import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.mainVisual}>
        <header className={styles.header}>
          <div className={styles["header-flex"]}>
            <h1 className={styles.header__topic}>
              <Link href="/">
                <Image
                  className={styles.header__logo}
                  src="/logo.svg"
                  alt="TAKISEA PRODUCTION"
                  width={35}
                  height={35}
                  priority
                />
                TAKISEA PRODUCTION
              </Link>
            </h1>
            <nav className={styles.nav__menu}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <Link href="/#about">私について</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/#service">サービス</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/#achievement">実績</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/#price">料金</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/#flow">制作の流れ</Link>
                </li>
                <li className={styles.nav__item}>
                  <Link href="/column/">コラム</Link>
                </li>
                <li className={`${styles.nav__item} ${styles.contact}`}>
                  <Link href="/contact/">
                    <span>まずは相談する</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.nav__hum}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className={styles["nav__menu-sp"]}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <Link href="/#about">私について</Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/#service">サービス</Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/#achievement">実績</Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/#price">料金</Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/#flow">制作の流れ</Link>
              </li>
              <li className={styles.nav__item}>
                <Link href="/column/">コラム</Link>
              </li>
            </ul>
            <div className={styles.contactBtn}>
              <a href="/contact/">
                <span>お問い合わせはこちら</span>
              </a>
            </div>
          </nav>
        </header>

        <div className={styles.mainVisual__content}>
          <div className={styles.topic}>
            <div className={styles.topic__title}>
              <div className={styles.animate}>
                <span>W</span>
                <span>E</span>
                <span>B</span>
                <span>に</span>
                <span>も</span>
                <span>事</span>
                <span>務</span>
                <span>所</span>
                <span>を</span>
                <br />
                <span>開</span>
                <span>設</span>
                <span>し</span>
                <span>ま</span>
                <span>せ</span>
                <span>ん</span>
                <span>か</span>
                <span>？</span>
              </div>
            </div>
            <p className={styles.topic__txt}>
              今はすぐにネットで検索する時代。
              <br />
              そんな時代だからこそ、WEB上にも事務所や店舗を
              <br className="pcOnly" />
              構える必要があると私は思っています。
              <br />
              私はそんなWEB事務所を作るお手伝いを日々しております。
            </p>
          </div>
          <div className={styles.mainVisual__img}>
            <Image
              src="/achievement01.png"
              alt="WEB制作"
              width={460}
              height={259}
              priority
            />
            <Image
              src="/achievement02.png"
              alt="WEB制作"
              width={460}
              height={259}
              priority
            />
            <Image
              src="/achievement03.png"
              alt="WEB制作"
              width={460}
              height={259}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
