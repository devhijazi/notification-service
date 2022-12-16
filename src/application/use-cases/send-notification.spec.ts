import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications.repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'Social',
      recipientId: 'gabriel-hijazi',
      content: 'Você ganhou na mega sena',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
