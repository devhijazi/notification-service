import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  it('should be able to create a notification ', () => {
    const notification = new Notification({
      recipientId: 'gabriel-hijazi-id',
      category: 'social',
      content: new Content('Transferencia recebida'),
    });

    expect(notification).toBeTruthy();
  });
});
