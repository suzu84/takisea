"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import styles from "./index.module.css";

export default function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles["header-flex"]}>
        <div className={styles.header__topic}>
          <Link href="/">
            <Image
              className={styles.header__logo}
              src="/logo-color.svg"
              alt="TAKISEA PRODUCTION"
              width={35}
              height={35}
              priority
            />
            TAKISEA PRODUCTION
          </Link>
        </div>
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
        <div
          className={cn(styles.nav__hum, { [styles.active]: isOpen })}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav
        className={cn(styles["nav__menu-sp"], { [styles.active]: isOpen })}
      >
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/#about" onClick={closeMenu}>
              私について
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/#service" onClick={closeMenu}>
              サービス
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/#achievement" onClick={closeMenu}>
              実績
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/#price" onClick={closeMenu}>
              料金
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/#flow" onClick={closeMenu}>
              制作の流れ
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/column/" onClick={closeMenu}>
              コラム
            </Link>
          </li>
        </ul>
        <div className={styles.contactBtn}>
          <Link href="/contact/" onClick={closeMenu}>
            <span>お問い合わせはこちら</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
