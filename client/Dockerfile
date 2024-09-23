# ベースイメージ
FROM node:20-alpine3.19

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./310-outputs/

# パッケージインストール
# RUN npm install

# ソースコードをコピー
COPY . .

# アプリを起動
# CMD ["npm", "run", "dev"]
