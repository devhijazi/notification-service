import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationError } from './errors/notification-error';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationError();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
