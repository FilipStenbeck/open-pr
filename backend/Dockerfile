FROM node:13.2.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn  --no-progress --frozen-lockfile install

ADD . /app/

RUN yarn clean
RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]