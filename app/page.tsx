"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/app/_components/FadeIn";
import ScrollHint from "@/app/_components/ScrollHint";
import cn from "classnames";
import "@splidejs/react-splide/css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="about"
          className={cn(styles.section, styles["section--about"])}
        >
          <FadeIn>
            <h2 className={styles.about__title}>私について</h2> {/* fadeIn */}
          </FadeIn>
          <FadeIn>
            <div className={styles.about__content}>
              <div className={styles.about__topic}>
                <p>ユーザーファースト</p>
              </div>
              <div className={styles.about__txt}>
                <p>
                  東京都板橋区を拠点にホームページやLP(ランディングページ)の制作・運用を行なってます。
                </p>
                <p>
                  上場企業のIT部門で4年間勤め、130以上のサイト制作・運用に携わったノウハウを活かし、ターゲットに合った最適なWEBサイト制作を請け負います。
                  作るからには、サイトを見に来てくれるユーザーにストレスなく、最適な情報を届けていきましょう。
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <p className={styles.about__name}>TAKISEA PRODUCTION</p>
          </FadeIn>
        </section>
        <section
          id="service"
          className={`${styles.section} ${styles["section--service"]}`}
        >
          <div className={styles.service__content}>
            <FadeIn>
              <h2 className={styles.service__title}>サービス</h2>
            </FadeIn>
            <FadeIn>
              <div className={styles.service__topic}>
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
            </FadeIn>
            <FadeIn>
              <ul className={styles.service__list}>
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
                    unoptimized // これを一時的に追加
                  />
                  <div className={styles.service__txt}>
                    <p>WEBサイト運用・保守</p>
                    <p>
                      WEBサイト制作だけでなく、その後の運用・保守管理も対応いたします。レポーティングも可能ですので、お気軽にご相談ください。
                    </p>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>
        </section>
        <section
          id="achievement"
          className={`${styles.section} ${styles["section--achievement"]}`}
        >
          <FadeIn>
            <h2 className={styles.achievement__title}>実績</h2>
          </FadeIn>
          <FadeIn>
            <div className={styles.achievement__content}>
              <Splide
                hasTrack={false} // 矢印を自作・配置するために false にします
                options={{
                  type: "loop", // 無限ループ
                  gap: "20px", // スライド間の余白
                  perPage: 3, // 3枚表示
                  perMove: 1, // 1枚ずつ動く
                  autoplay: true, // 自動再生
                  interval: 4000, // 自動再生速度
                  speed: 800, // スライド速度
                  arrows: true, // 矢印有効
                  pagination: false, // ドット非表示
                  breakpoints: {
                    // レスポンシブ
                    768: {
                      perPage: 1,
                    },
                  },
                }}
              >
                <SplideTrack>
                  <SplideSlide className={styles.achievement__item}>
                    <Link href="https://risidevar.studio.site/" target="_blank">
                      <Image
                        src="/achievement04.png"
                        alt="サービスサイトサイト"
                        width={305}
                        height={172}
                        unoptimized
                      />
                      <p>サービスサイト</p>
                      <p>
                        Studioで作成したカフェ＆バーのサイトです。費用を限りなく抑えたい方にはStudioで制作もご提案いたします。
                      </p>
                    </Link>
                  </SplideSlide>
                  <SplideSlide className={styles.achievement__item}>
                    <Link href="achievement/heirei/">
                      <Image
                        src="/achievement01.png"
                        alt="コーポレートサイト"
                        width={305}
                        height={172}
                        unoptimized
                      />
                      <p>コーポレートサイト</p>
                      <p>
                        不動産会社のコーポレートサイト制作となります。ユーザーに安心感を与えるような設計・デザインを意識して制作しました。
                      </p>
                    </Link>
                  </SplideSlide>
                  <SplideSlide className={styles.achievement__item}>
                    <Link href="achievement/granperche-yotsuya/">
                      <Image
                        src="/achievement02.png"
                        alt="サービスサイト"
                        width={305}
                        height={172}
                        unoptimized
                      />
                      <p>サービスサイト</p>
                      <p>
                        高級賃貸マンションの専用サイトとなります。写真を多く掲載することで、住むイメージを連想させております。
                      </p>
                    </Link>
                  </SplideSlide>
                  <SplideSlide className={styles.achievement__item}>
                    <Link href="achievement/suzumoto/">
                      <Image
                        src="/achievement03.png"
                        alt="ランディングページ"
                        width={305}
                        height={172}
                        unoptimized
                      />
                      <p>ランディングページ</p>
                      <p>
                        法人向けサービスのランディングページとなります。誠実・信頼性を感じれるようカラーやフォントを意識してデザインしました。
                      </p>
                    </Link>
                  </SplideSlide>
                </SplideTrack>
                <div className="splide__arrows">
                  <button
                    className={`splide__arrow splide__arrow--prev ${styles.arrow}`}
                  >
                    ＜
                  </button>
                  <button
                    className={`splide__arrow splide__arrow--next ${styles.arrow}`}
                  >
                    ＞
                  </button>
                </div>
              </Splide>
            </div>
          </FadeIn>
        </section>
        <section
          id="price"
          className={`${styles.section} ${styles["section--price"]}`}
        >
          <div className={styles.price__content}>
            <FadeIn>
              <h2 className={styles.price__title}>料金</h2>
            </FadeIn>
            <FadeIn>
              <div className={styles.price__topic}>
                <p className={styles.subheading}>
                  ホームページ制作にあたり、
                  <br className="spOnly" />
                  パッケージプランをご用意してます。
                  <br />
                  <span>
                    (今ならGoogleアナリティクスなどの計測初期設定付き)
                  </span>
                </p>
                <p>
                  早くWEBサイトを作成したい、IT業界の見積ってわからなくて判断に困る、
                  <br />
                  そんな方に私が用意した下記のパッケージプランをおすすめます。
                  <br />
                  それぞれの範囲内であれば、パッケージ価格で御見積書をすぐにお送りいたします。
                  <br />
                  お客様の要望に沿ってパッケージプランの微調整も可能ですので、その際はご相談ください。
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <ScrollHint>
                <div className={`${styles.price__list} js-scrollable`}>
                  <table>
                    <tbody>
                      <tr>
                        <th className={styles.standard}>
                          スタンダードプラン
                          <br />
                          <span>必要最低限のサイト</span>
                        </th>
                        <th className={styles.business}>
                          ビジネスプラン
                          <br />
                          <span>文句なしの企業・店舗サイト</span>
                        </th>
                        <th className={styles.premium}>
                          プレミアムプラン
                          <br />
                          <span>集客を目的とする戦略的なサイト</span>
                        </th>
                      </tr>
                      <tr>
                        <td className={styles.standard}>
                          <strong>¥200,000</strong>（税抜）
                        </td>
                        <td className={styles.business}>
                          <strong>¥350,000</strong>（税抜）
                        </td>
                        <td className={styles.premium}>
                          <strong>¥500,000</strong>（税抜）
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.standard}>
                          ページ数：5ページほど
                        </td>
                        <td className={styles.business}>
                          ページ数：10ページほど
                        </td>
                        <td className={styles.premium}>
                          ページ数：20ページほど
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.standard}>スマホ対応：○</td>
                        <td className={styles.business}>スマホ対応：○</td>
                        <td className={styles.premium}>スマホ対応：○</td>
                      </tr>
                      <tr>
                        <td className={styles.standard}>
                          お問い合わせフォーム：△
                          <br />
                          <span>
                            （フォームツールを埋め込んだお問い合わせページ作成は可能です。）
                          </span>
                        </td>
                        <td className={styles.business}>
                          お問い合わせフォーム：○
                        </td>
                        <td className={styles.premium}>
                          お問い合わせフォーム：○
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.standard}>更新機能：×</td>
                        <td className={styles.business}>
                          更新機能：○
                          <br />
                          <span>（CMS使用）</span>
                        </td>
                        <td className={styles.premium}>
                          更新機能：○
                          <br />
                          <span>（CMS使用）</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollHint>
            </FadeIn>
            <FadeIn>
              <div className={styles.annotation}>
                <small>
                  ※ドメイン取得・サーバー契約費にかかる費用は、お客様のご負担となります。
                </small>
                <small>
                  ※画像はお客様にてご用意をお願いします。素材購入に関しても所有権の帰属問題に関わりますので、基本的にはお客様にてご購入をお願いいたします。
                </small>
              </div>
            </FadeIn>
            <div className={styles.service__other}>
              <FadeIn>
                <p className={styles.subheading}>
                  パッケージプラン以外の
                  <br className="spOnly" />
                  WEBサイトに関わる料金
                  <br />
                </p>
              </FadeIn>
              <FadeIn>
                <dl>
                  <div>
                    <dt>
                      ランディングページ制作<span>※1</span>
                    </dt>
                    <dd>¥100,000（税抜）〜</dd>
                  </div>
                  <div>
                    <dt>
                      トップページ制作<span>※1</span>
                    </dt>
                    <dd>¥65,000（税抜）〜</dd>
                  </div>
                  <div>
                    <dt>
                      下層ページ制作<span>※1</span>
                    </dt>
                    <dd>¥40,000（税抜）〜</dd>
                  </div>
                  <div>
                    <dt>
                      アクセス解析に伴う初期設定
                      <br className="spOnly" />
                      <span>（Googleアナリティクス等）※2</span>
                    </dt>
                    <dd>¥12,000（税抜）〜</dd>
                  </div>
                  <div>
                    <dt>
                      WEBサイト運用・保守<span>※3</span>
                    </dt>
                    <dd>¥10,000（税抜）〜/月</dd>
                  </div>
                </dl>
              </FadeIn>
              <FadeIn>
                <div className={styles.annotation}>
                  <small>
                    ※1
                    画像はお客様にてご用意をお願いします。素材購入に関しても所有権の帰属問題に関わりますので、基本的にはお客様にてご購入をお願いいたします。
                  </small>
                  <small>
                    ※2 計測初期設定後の運用は、お客様にてお願いいたします。
                  </small>
                  <small>
                    ※3
                    ドメイン・サーバー管理やアクセス解析及びレポーティングなど
                  </small>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
        <section
          id="flow"
          className={`${styles.section} ${styles["section--flow"]}`}
        >
          <FadeIn>
            <h2 className={styles.flow__title}>制作の流れ</h2>
          </FadeIn>
          <FadeIn>
            <div className={styles.flow__content}>
              <ol className={styles.flow__list}>
                {/* fadeIn */}
                <li className={styles.flow__item}>
                  <p>お問い合わせ</p>
                </li>
                <li className={styles.flow__item}>
                  <p>お打ち合わせ</p>
                </li>
                <li className={styles.flow__item}>
                  <p>ご提案・お見積り</p>
                </li>
                <li className={styles.flow__item}>
                  <p>デザイン・コーディング</p>
                </li>
                <li className={styles.flow__item}>
                  <p>テストサイト確認</p>
                </li>
                <li className={styles.flow__item}>
                  <p>納品・公開</p>
                </li>
              </ol>
              <p>
                ご提案・制作内容によっては変更の場合もございますが、以上が制作の流れとなります。
                <br /> {/* fadeIn */}
                WEBサイト立ち上げたいが悩んでるという方は、まずはお問い合わせボタンからメールにてご相談ください。
              </p>
            </div>
          </FadeIn>
        </section>
        <FadeIn>
          <div className="contactBtn">
            <a href="/contact/">
              <span>お問い合わせはこちら</span>
            </a>
          </div>
        </FadeIn>
      </main>
    </>
  );
}
