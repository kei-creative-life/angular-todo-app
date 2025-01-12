FROM node:20.15.1-alpine3.20

WORKDIR /app

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
ENV NODE_OPTIONS=--dns-result-order=ipv4first
# Analytics を無効化
ENV NG_CLI_ANALYTICS=false

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]