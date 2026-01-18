"use client";

import { useState, useEffect } from "react"; // 【追加】useEffect
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion"; // 【追加】アニメーション用
import styles from "./index.module.css";

// 【追加】スライド用の画像リスト
const images = [
  "/achievement01.png",
  "/achievement02.png",
  "/achievement03.png",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0); // 【追加】現在の画像番号を管理

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // 【追加】4秒ごとに画像を切り替えるタイマー設定
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer); // クリーンアップ（メモリ漏れ防止）
  }, []);

  useEffect(() => {
    // WordPress時代のロジックをここに移植
    const getRandom = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const animateBubble = (bubble: HTMLElement) => {
      const moveX = getRandom(-100, 100);
      const moveY = getRandom(-100, 100);
      const duration = getRandom(8000, 16000);

      bubble.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${moveX}px, ${moveY}px)` },
        ],
        {
          duration: duration,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        }
      );
    };

    // クラス名から全てのバブルを取得（styles.bubbleはビルド時に名前が変わるため注意）
    const bubbles = document.querySelectorAll(`.${styles.bubble}`);

    bubbles.forEach((el) => {
      const bubble = el as HTMLElement;
      // 初期位置・サイズをランダムに設定
      bubble.style.top = `${getRandom(0, 100)}%`;
      bubble.style.left = `${getRandom(0, 100)}%`;
      const size = getRandom(60, 150);
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      animateBubble(bubble);
    });
  }, []); // 空の配列で「初回表示時のみ実行」

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

          {/* 【変更】スライダー部分：個別のImageタグを消して、AnimatePresenceで囲む */}
          <div className={styles.mainVisual__img}>
            <AnimatePresence>
              <motion.div
                key={index} // これが重要！
                initial={{ opacity: 0 }} // 出現時
                animate={{ opacity: 1 }} // 表示中
                exit={{ opacity: 0 }} // 消える時
                transition={{ duration: 0.8 }} // フェードの速さ
              >
                <Image
                  src={images[index]} // 配列から現在の番号の画像を出す
                  alt="WEB制作"
                  width={460}
                  height={259}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.bubbleContainer}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`${styles.bubble} ${
                styles[`bubbleContainer__bubble--${i + 1}`]
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
