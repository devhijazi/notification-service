import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { GetNotification } from './get-notifications';

describe('Get Notification', () => {
  it('should be able to get notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getNotifications = new GetNotification(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notification } = await getNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notification).toHaveLength(2);
    expect(notification).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
