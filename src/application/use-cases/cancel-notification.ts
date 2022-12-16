import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationError } from './errors/notification-error';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationError();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
