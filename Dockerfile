FROM docker.io/node:lts-alpine as deps

WORKDIR /usr/src/app

COPY package.json yarn.lock  ./

RUN yarn install

COPY prisma prisma

RUN npx prisma migrate dev

FROM docker.io/node:lts-alpine AS runner

ENV PORT=3333

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json

COPY ./dist ./dist

RUN chown -R node:node .

USER node

EXPOSE 3333

CMD ["node", "dist/src/index.js"]