import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '@application/repositories/notification-repository';

interface CountNotificationRequest {
  recipientId: string;
}

interface CountNotificationResponse {
  count: number;
}

@Injectable()
export class CountNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: CountNotificationRequest,
  ): Promise<CountNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
