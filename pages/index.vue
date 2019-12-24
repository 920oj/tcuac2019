<template>
  <div class="index">
    <div id="header-container">
      <div id="header">
        <h2>TCU Advent Calendar 2019</h2>
        <p>#tcuac2019 特設サイト</p>
      </div>
      <div id="attention">
        <p style="text-align: right; font-size: 0.8em;">なおこの写真は2018年の横浜キャンパス・光る学費です（今年は未実施）</p>
      </div>
    </div>
    <b-container>
      <b-alert show variant="info" style="margin: 30px 0;" v-if="status.isAdditional">現在追加募集実施中です！詳細は<a href="#add-rec">こちら</a></b-alert>
      <b-alert show variant="info" style="margin: 30px 0;" v-if="!status.isAdditional">このイベントは終了しました。皆様のご参加、ありがとうございました！2020年も宜しくおねがいします！</b-alert>
      <h3>Tokyo City University Advent Calendarとは</h3>
      <p>12月のはじめからクリスマスまでの25日間、東京都市大学に在籍する学生が持ち回りで自分の好きな話題について記事を執筆するイベントです。</p>
      <ul>
        <li>テーマは自由です。学校生活、自分の趣味のダイマ、技術系、エッセー、ポエム等何でも書き殴ってください。ただし特定の人物への誹謗中傷等、公序良俗に反する内容はNGです。</li>
        <li>記事を公開する媒体は、note、Qiita、はてなブログなどの、公開できるオンラインブログ・共有サービスとします。</li>
        <li>記事の冒頭に、「この記事はTokyo City University Advent Calendar 2019の○日目の記事です」と明記してください。（できればこのAdventarのリンクも貼ってください）</li>
        <li>ハッシュタグは「#tcuac2019」です。Twitterで共有する際などにお使いください。</li>
      </ul>
      <h3>記事一覧</h3>
      <div class="article-table">
        <table style="width: 100%;">
          <thead>
            <tr>
              <th>日付</th>
              <th>記事タイトル</th>
              <th>著者</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in articles.contents" :key="index" class="table-cell">
              <th class="table-date">{{item.date}}</th>
              <th class="table-title"><a :href="item.url" target="_blank">{{item.title}}</a></th>
              <th class="table-author">{{item.author}}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="add-rec">
        <h3>追加募集枠について</h3>
        <p>好評につき、クリスマス終了後の12月26日から31日の分までも、皆様から記事を募集します！追加募集枠に関しては、1日に被りが発生（1日に複数記事が投稿される）しても良いとし、記事が投稿され次第こちらのサイトに追記致します。但し、以下のことを守ってください。</p>
        <ul>
          <li>記事内に、「この記事はTokyo City University Advent Calendar 2019の追加枠の記事です」と明記してください。（できればこのAdventarのリンクも貼ってください）</li>
          <li>記事を公開したら、Twitterにて「#tcuac2019」のハッシュタグをつけてつぶやいてください。@920OJから「いいね」し、このページの追記を行います。</li>
          <li>もし年内に記事の公開が間に合わなかったとしても、ハッシュタグをつけてつぶやいていただければ、出来る限りこのページへの追記を行います。頑張って書きましょう！</li>
          <li>質問がありましたら、Twitter: <a href="https://twitter.com/920oj" target="_blank">@920OJ</a>までご連絡ください</li>
        </ul>
      </div>
    </b-container>
    <div id="footer">
      <p>Tokyo City University Advent Calendar 2019</p>
      <p>このサイトは東京都市大学の学生有志による非公式のものです。</p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      articles_tmp: {},
      fields: [
        { key: "date", label: "日付" },
        { key: "title", label: "記事タイトル" },
        { key: "author", label: "著者" },
      ]
    }
  },
  methods: {
    converseDate: function() {
      for(let key in this.articles.contents){
        this.articles.contents[key].date = this.$moment(this.articles.contents[key].date).format('MM[月]DD[日]');
      }
    }
  },
  created: function() {
    this.converseDate();
  },
  async asyncData({ $axios }) {
    const articles = await $axios.$get('https://tcuac2019.microcms.io/api/v1/articles', {
      headers: {
        "X-API-KEY": "58b1b567-6eea-433d-bc7f-fbd1e645c9df"
      },
      params: {
        limit: 31
      },
      data: {}
    });
    const status = await $axios.$get('https://920oj.microcms.io/api/v1/status', {
      headers: {
        "X-API-KEY": "b24373c8-7ed6-4bf5-aef5-f1bb027bf05b"
      },
      data: {}
    });
    return {articles, status};
  }
}

</script>

<style>

h3 {
  margin: 50px 0;
  text-align: center;

}

#header-container {
  background-image: url("/img/back.jpg");
  height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

#header-container::before {
  content: '';
  background: inherit;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  z-index: -1;
}

#header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 9;
}

#attention {
  flex: 1;
  padding-right: 30px;
}

.table-date {
  width: 100px;
}

.table-cell {
  height: 100px;
  border-bottom: 1px solid #c7c7c7;
}

#add-rec {
  margin-bottom: 50px;
}

#footer {
  background-color: #343a40;
  color: #fff;
  text-align: center;
  padding: 50px 0;
}

</style>
