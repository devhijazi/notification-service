import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationError } from './errors/notification-error';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationError();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
