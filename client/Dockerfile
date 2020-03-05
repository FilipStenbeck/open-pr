FROM node:13.2.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn  --no-progress --frozen-lockfile install

ADD . /app/

RUN yarn build

EXPOSE 3000

CMD ["yarn", "next"]
