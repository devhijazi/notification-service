import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { CountNotification } from './count-notifications';

describe('Count Notification', () => {
  it('should be able to count notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countNotification = new CountNotification(notificationsRepository);

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
