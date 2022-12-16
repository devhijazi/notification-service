# Notification Service

Microsserivço de notificação

## **Overview**

- Create Notification
- Read Notification
- Unread Notification
- Cancel Notification
- Count Notification

## **Tecnologies**

- Nest.js
- Jest
- Prisma
- SQLite

## **Features - Tecnology**

- Docker
- Apache Kafka
- Artillery
- Swagger

## **Features - Database**

- PostgresSQL

## **Instalation**

First we need install all dependencies, to make this open the terminal and run:

```sh
$ yarn

```

Now we need create the prisma database, to do that run:

```sh
$ npx prisma migrate database
```

After, run the command to open prisma studio if you want

```sh
$ yarn prisma studio
```

Now you can run the micro-service and use him

```sh
$ yarn start:dev
```

## **Endpoints**

- **POST**: `/notifications` (Create)
- **PATCH**: `/notifications/:id/cancel` (Cancel)
- **PATCH**: `/notifications/:id/read` (Read)
- **PATCH**: `/notifications/:id/unread` (Unread)
- **GET**: `/notifications/from/:recipientId/` (List)
- **GET**: `/notifications/count/from/:id/` (Count)

## **Coverage Results**

<img src="https://imgur.com/0pFxNLi.png" alt="cov">
