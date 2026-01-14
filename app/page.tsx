import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="about"
          className={`${styles.section} ${styles["section--about"]}`}
        >
          <h2 className={styles.about__title}>私について</h2> {/* fadeIn */}
          <div className={styles.about__content}>
            <div className={styles.about__topic}>
              {/* fadeIn */}
              <p>ユーザーファースト</p>
            </div>
            <div className={styles.about__txt}>
              {/* fadeIn */}
              <p>
                東京都板橋区を拠点にホームページやLP(ランディングページ)の制作・運用を行なってます。
              </p>
              <p>
                上場企業のIT部門で4年間勤め、130以上のサイト制作・運用に携わったノウハウを活かし、ターゲットに合った最適なWEBサイト制作を請け負います。
                作るからには、サイトを見に来てくれるユーザーにストレスなく、最適な情報を届けていきましょう。
              </p>
            </div>
          </div>
          <p className={styles.about__name}>TAKISEA PRODUCTION</p>
        </section>
        <section
          id="service"
          className={`${styles.section} ${styles["section--service"]}`}
        >
          <div className={styles.service__content}>
            <h2 className={styles.service__title}>サービス</h2>
            {/* fadeIn */}
            <div className={styles.service__topic}>
              {/* fadeIn */}
              <p className={styles.subheading}>
                制作からサイト運用まで
                <br className="spOnly" />
                ノンストップ対応可能です。
              </p>
              <p>
                ホームページ出来た後の運用方法がわからないご担当の方も多いかと思います。
                <br />
                そんなときは、私にお任せください。公開後の運用・保守も対応させていただきます。
                <br />
                もちろん、ホームページ・ランディングページ制作のみも可能で、さらに既存のホームページにコンテンツ追加やページを新しく増やす単発改修も対応可能となりますので、お気軽にご相談ください。
              </p>
            </div>
            <ul className={styles.service__list}>
              {/* fadeIn */}
              <li className={styles.service__item}>
                <Image
                  src="/service01.jpg"
                  alt="ホームページ制作"
                  width={330}
                  height={200}
                  unoptimized // これを一時的に追加
                />
                <div className={styles.service__txt}>
                  <p>ホームページ制作</p>
                  <p>
                    WEBからの玄関口となる会社や店舗のホームページ作成を行います。既に公開しているホームページの修正やリニューアルも可能となります。
                  </p>
                </div>
              </li>
              <li className={styles.service__item}>
                <Image
                  src="/service02.jpg"
                  alt="ランディングページ制作"
                  width={330}
                  height={200}
                  unoptimized // これを一時的に追加
                />
                <div className={styles.service__txt}>
                  <p>ランディングページ制作</p>
                  <p>
                    特定の商品・サービスを訴求する専用ページの作成を行います。
                  </p>
                </div>
              </li>
              <li className={styles.service__item}>
                <Image
                  src="/service03.jpg"
                  alt="WEBサイト運用・保守"
                  width={330}
                  height={200}
                />
                <div className={styles.service__txt}>
                  <p>WEBサイト運用・保守</p>
                  <p>
                    WEBサイト制作だけでなく、その後の運用・保守管理も対応いたします。レポーティングも可能ですので、お気軽にご相談ください。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
