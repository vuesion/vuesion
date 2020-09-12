import { mount, createLocalVue } from '@vue/test-utils';
import { addNotification } from './utils';
import VueNotificationStack from './VueNotificationStack.vue';
import { INotification } from './INotification';

const localVue = createLocalVue();

describe('VueNotificationStack.vue', () => {
  const notification: INotification = {
    title: 'this is a test',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
  };

  test('renders component', () => {
    const wrapper = mount<any>(VueNotificationStack, {
      localVue,
    });

    expect(wrapper.vm.orderedNotifications).toHaveLength(0);
  });

  test('add and remove notification', () => {
    const wrapper = mount<any>(VueNotificationStack, {
      localVue,
    });

    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    expect(wrapper.vm.orderedNotifications).toHaveLength(3);

    wrapper.vm.removeNotification({ id: wrapper.vm.orderedNotifications[0].id, text: 'foo', title: 'bar' });
    expect(wrapper.vm.orderedNotifications).toHaveLength(2);
  });

  test('should remove notification after 100 ms', (done) => {
    const wrapper = mount<any>(VueNotificationStack, {
      localVue,
      propsData: {
        duration: 100,
      },
    });

    addNotification(Object.assign({ type: 'danger' }, notification));
    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    expect(wrapper.vm.orderedNotifications).toHaveLength(3);

    setTimeout(() => {
      expect(wrapper.vm.orderedNotifications).toHaveLength(0);
      done();
    }, 200);
  });
});
