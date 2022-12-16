import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';

import { NotificationError } from './errors/notification-error';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
  it('should be able to unread notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    await unreadNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should be able to unread notification when it does not exist', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationError);
  });
});
