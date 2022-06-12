# sendgridjp-nodejs-example-test [![sendgridjp-nodejs-example-test](https://circleci.com/gh/yken2257/sendgridjp-nodejs-example-test.svg)](https://app.circleci.com/pipelines/github/yken2257/sendgridjp-nodejs-example-test)
[SendGridJPのNode.jsサンプルコード](https://github.com/SendGridJP/sendgridjp-nodejs-example)の動作確認のためのリポジトリです。

## 概要
CircleCI上で[Node.js (LTS)](https://nodejs.org/ja/) とSendGrid公式ライブラリ(最新版)をインストールし、サンプルコードの動作検証をします。
具体的には、サンプルコードの最後でHTTPレスポンスコード202が返ってくればテスト成功とみなします。

- sendgridjp-nodejs-example.js: [サンプルコード](https://github.com/SendGridJP/sendgridjp-nodejs-example/blob/master/sendgrid-nodejs-example.js)をモジュール化したもの
- sendgridjp-nodejs-example.test.js: 上記をJestでテストするコード
- .circleci/config.yml: CircleCI設定（環境設定、環境変数設定、用いたバージョンの表示、テスト。毎月2日の午前9時に定期実行されます。）

（手動でテストする場合の手順）

```bash
# Install dependencies
npm install @sendgrid/mail
npm install dotenv
npm install --save-dev jest
# .envファイルを編集
echo "API_KEY=$SENDGRID_API_KEY" >> .env
echo "TOS=alice@sink.sendgrid.net,bob@sink.sendgrid.net,carol@sink.sendgrid.net" >> .env
echo "FROM=you@example.com" >> .env
# Show Version
node --version
VER=$(cat package.json | jq -r '.dependencies."@sendgrid/mail"')
echo "@sendgrid/mail library: Version==$VER"
# Test
./node_modules/.bin/jest
```
