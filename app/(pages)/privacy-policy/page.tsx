import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "TAKISEA PRODUCTIONのプライバシーポリシーについてご説明します。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <div className={styles.pageContent}>
        <h1 className={styles.pageTitle}>プライバシーポリシー</h1>

        <section className={styles.section}>
          <p>
            本サイトでは、取得した個人情報の取扱いに関して以下のとおりプライバシーポリシーを定め、個人情報の保護に関する法律、個人情報保護に関するガイドライン等の指針、その他個人情報保護に関する関係法令を遵守します。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報</h2>
          <p>
            「個人情報」とは、個人情報保護法における個人情報を指し、生存する個人に関する情報であって当該情報に含まれる氏名・生年月日・住所・電話番号・連絡先その他の記述等により特定の個人を識別できる情報及び容貌・指紋・声紋にかかるデータ及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の利用目的</h2>
          <p>
            当社は、当社が取得した個人情報について、法令に定める場合又は本人の同意を得た場合を除き、以下に定める利用目的の達成に必要な範囲を超えて利用することはありません。
          </p>
          <ul>
            <li>本サイトの運営、維持、管理</li>
            <li>本サイトを通じたサービスの提供及び紹介</li>
            <li>本サイトの品質向上のためのアンケート</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>個人情報の収集方法</h2>
          <p>
            本サイトの運営に必要な範囲で、本サイトの一般利用者（以下「ユーザー」といいます。）又は本サイトに広告掲載を行う者（以下「掲載主」といいます。）から、ユーザー又は掲載主に係る個人情報を取得することがあります。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の安全管理</h2>
          <p>
            本サイトは、個人情報の保護に関して、組織的、物理的、人的、技術的に適切な対策を実施し、当社の取り扱う個人情報の漏えい、滅失又はき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講ずるものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の開示および訂正等</h2>
          <p>
            当社は、法令で定める場合を除き、本人の同意に基づき取得した個人情報を、本人の事前の同意なく第三者に提供することはありません。なお、本人の求めによる個人情報の開示、訂正、追加若しくは削除又は利用目的の通知については、法令に従いこれを行うとともに、ご意見、ご相談に関して適切に対応します。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の利用目的の変更</h2>
          <p>
            当社は、前項で特定した利用目的は、予め本人の同意を得た場合を除くほかは、原則として変更しません。但し、変更前の利用目的と相当の関連性を有すると合理的に認められる範囲において、予め変更後の利用目的を公表の上で変更を行う場合はこの限りではありません。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の第三者提供</h2>
          <p>
            当社は、個人情報の取扱いの全部又は一部を第三者に委託する場合、その適格性を十分に審査し、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行うこととします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の取扱いの改善および見直し</h2>
          <p>
            当社は、個人情報の取扱い、管理体制及び取組みに関する点検を実施し、継続的に改善・見直しを行います。
          </p>
        </section>

        <section className={styles.section}>
          <h2>個人情報の削除および廃棄</h2>
          <p>
            当社は、個人情報の利用目的に照らしその必要性が失われたときは、個人情報を消去又は廃棄するものとし、当該消去及び廃棄は、外部流失等の危険を防止するために必要かつ適切な方法により、業務の遂行上必要な限りにおいて行います。
          </p>
        </section>

        <section className={styles.section}>
          <h2>お問い合わせ窓口</h2>
          <p>
            個人情報の取り扱いに関するご質問やご不明点、その他のお問い合わせはお問い合わせフォームよりご連絡ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2>SSL（Secure Socket Layer）について</h2>
          <p>
            当社のWebサイトはSSLに対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。ユーザーが入力する氏名や住所、電話番号などの個人情報は自動的に暗号化されます。
          </p>
        </section>

        <section className={styles.section}>
          <h2>cookieについて</h2>
          <p>
            cookieとは、WebサーバーがWebブラウザに送信するデータのことを指します。Webサーバーがcookieを参照してユーザーのパソコンを識別することができ、当社Webサイトを効率的に利用できます。当社Webサイトがcookieとして送るファイルは、個人を特定するような情報は含んでおりません。お使いのWebブラウザの設定により、cookieを無効にすることも可能です。
          </p>
        </section>

        <section className={styles.section}>
          <h2>免責事項</h2>
          <p>
            当社Webサイト上の情報の正確性には万全を期していますが、利用者が当社Webサイトの情報を用いて行う一切の行為に関して、一切の責任を負わないものとします。 当社は、利用者が当社Webサイトを利用したことにより生じた利用者の損害及び利用者が第三者に与えた損害に関して、一切の責任を負わないものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2>著作権・肖像権</h2>
          <p>
            当社Webサイト内の文章や画像、すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。
          </p>
        </section>

        <section className={styles.section}>
          <h2>リンク</h2>
          <p>
            当社Webサイトへのリンクは、自由に設置していただいて構いません。ただし、Webサイトの内容等によってはリンクの設置をお断りすることがあります。
          </p>
        </section>
      </div>
    </main>
  );
}
