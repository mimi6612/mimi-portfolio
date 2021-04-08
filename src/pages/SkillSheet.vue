<template>
  <div class="container content">
    <h1>職務経歴書</h1>
    <div class="section">
      <h2>基本情報</h2>
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>名前</strong>
            </td>
            <td>小松崎 涼一朗</td>
          </tr>
          <tr>
            <td>
              <strong>生年月日</strong>
            </td>
            <td>1994/12/24</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>保有スキル</h2>
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(skill, index) in skills" :key="index">
            <td>
              <strong>
                <em> {{ skill.title }}</em>
              </strong>
            </td>
            <td>{{ skill.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>職務経歴</h2>
      <h3>スローガン株式会社 （2019/03 ~ 現在）</h3>
      <p>
        フロントエンドとバックエンドどちらも触りながら、開発していきました。<br />
        基本的に5~10名程度のチームでスクラム開発をしてきました。<br />
        役割は先へ先へと実装に取り掛かり、開発を前に進める役割だったと思います。
      </p>
      <div class="activity">
        <h4>
          <strong>
            自社webサイトの運用
          </strong>
        </h4>
        <p>
          エンジニアのキャッチアップがてら自社webサイトの運用を行いました。
          不具合改善や最低限の機能追加の対応をやっていました。
        </p>
        <h4>
          <strong>
            RailsでのAPI開発
          </strong>
        </h4>
        <p>
          バックエンド RailsのAPI,
          フロントエンドNuxtでサイトをリニューアルするプロジェクトがあり、そのAPI側の開発をやっていました。<br />
          rails wayや規約などのトピックやRest
          APIの設計やopenAPIの仕様のトピックを開発しながら、本で勉強していました。
        </p>
        <h4>
          <strong>
            Nuxtでのサイト開発
          </strong>
        </h4>
        <p>
          チームが移り、フロントエンドでの開発の担当になりました。Atomic
          Designによるコンポーネント設計を用いて開発しています。
        </p>
      </div>
    </div>

    <div class="section">
      <h2>業務外活動</h2>
      <div class="activity">
        <h4>
          <strong>キャリア支援のためのSNSサービスの立ち上げ</strong>
        </h4>
        <p>
          友達との縁で新規事業の立ち上げにジョインしました。<br />
          <a href="https://www.careerto.jp/">CareerTo</a>
          というキャリア特化のSNSをやってました。<br />
          サイトの開発をしたりやサービスの構想や施策をメンバーと議論したり、集客やリテンションの企画をやったりしました。<br />
        </p>
        <h4>
          <strong>酒屋のwebサイトのアップデートサポート</strong>
        </h4>
        <p>
          知り合いがコンサルしている
          <a href="https://sake-wadaya.com/">
            酒屋のサイト
          </a>
          が長らく放置されていたようなので、アップデート作業を代行でやりました。<br />
          こちらのサイトのWordPressで作られていていました。<br />
        </p>
      </div>
    </div>
    <div class="section">
      <h2>SNS</h2>
      <ul>
        <li>
          Twitter
          <a href="https://twitter.com/mimimimi6612gm1">@mimimimi6612gm1</a>
        </li>
        <li>
          Qiita
          <a href="https://qiita.com/mimimimi6612">@mimimimi6612</a>
        </li>
        <li>
          Zenn
          <a href="https://zenn.dev/mimimimi6612">mimimimi6612</a>
        </li>
        <li>
          note
          <a href="https://note.com/mimimimi6612">mimimimi6612</a>
        </li>
      </ul>
    </div>

    <p>
      Source:
      <a href="https://mimimy.com/skill-sheet">
        https://mimimy.com/skill-sheet
      </a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      return [
        {
          title: "Nuxt.js",
          description: "Webフロントエンド開発はを用いてやっていました。"
        },
        {
          title: "Vue.js",
          description: "Webフロントエンド開発はVue.jsを用いてやっていました。"
        },
        {
          title: "Rails",
          description:
            "主にAPI開発で使っていますが、Rails完結のwebアプリの開発もやっていました。"
        },
        {
          title: "Atomic Design",
          description:
            "フロントエンド開発ではAtomic Designの考え方を用いて開発していました。"
        },
        {
          title: "Open API",
          description:
            "API開発は、swagger等のOpen APIのツールを利用して、開発していました。"
        },
        {
          title: "スクラム開発",
          description: "開発チームではスクラムの体制で開発をしていました。"
        }
      ];
    }
  }
};
</script>

<style scoped>
.content {
  padding: 3rem 0;
}
.section {
  margin-bottom: 6rem;
}
.activity {
  padding: 0 2rem;
}
</style>
