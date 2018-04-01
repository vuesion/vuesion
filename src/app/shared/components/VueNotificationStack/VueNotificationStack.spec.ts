import { mount, createLocalVue }          from '@vue/test-utils';
import VueNotificationStack               from './VueNotificationStack.vue';
import { INotification, addNotification } from './utils';

const localVue = createLocalVue();

describe('VueNotificationStack.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueNotificationStack, {
      localVue,
    }) as any;
    const notification: INotification = {
      title: 'this is a test',
      text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    } as INotification;

    expect(wrapper.vm.notifications).toHaveLength(0);
  });

  test('add and remove notification', () => {
    const wrapper = mount(VueNotificationStack, {
      localVue,
    }) as any;
    const notification: INotification = {
      title: 'this is a test',
      text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    } as INotification;

    expect(wrapper.vm.notifications).toHaveLength(0);

    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    expect(wrapper.vm.notifications).toHaveLength(3);

    wrapper.vm.removeNotification({ id: 1 } as INotification);
    expect(wrapper.vm.notifications).toHaveLength(2);
  });

  test('should remove notification after 100 ms', (done) => {
    const wrapper = mount(VueNotificationStack, {
      localVue,
      propsData: {
        duration: 100,
      },
    }) as any;
    const notification: INotification = {
      title: 'this is a test',
      text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
    } as INotification;

    expect(wrapper.vm.notifications).toHaveLength(0);

    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    addNotification(Object.assign({}, notification));
    expect(wrapper.vm.notifications).toHaveLength(3);

    setTimeout(() => {
      expect(wrapper.vm.notifications).toHaveLength(0);
      done();
    }, 200);
  });

});
