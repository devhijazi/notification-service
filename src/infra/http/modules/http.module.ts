import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountNotification } from '@application/use-cases/count-notifications';
import { GetNotification } from '@application/use-cases/get-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from 'src/infra/database/database.module';

import { NotificationsController } from '../controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountNotification,
    GetNotification,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
