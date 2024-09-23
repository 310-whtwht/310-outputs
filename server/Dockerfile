# ベースイメージ
FROM node:20-alpine3.19

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# パッケージインストール
# RUN npm install

# ソースコードをコピー
COPY . .

# アプリを起動
# CMD ["node", "server.js"]
