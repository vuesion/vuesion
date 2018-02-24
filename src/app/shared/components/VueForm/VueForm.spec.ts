import { mount, createLocalVue }            from '@vue/test-utils';
import VueForm                              from './VueForm.vue';
import $style                               from 'identity-obj-proxy';
import { isEmailValid, isPhoneNumberValid } from './Validators';
import { IFormSchema }                      from './IFormSchema';

const localVue = createLocalVue();

describe('VueForm.vue', () => {

  test('renders component', () => {
    const schema =
      {
        cancellationText: 'Cancel',
        submitText:       'Submit',
        id:               'myForm',
        name:             'myForm',
        title:            'Register',
        subtitle:         'Please fill in all required fields',
        elements:         [
          {
            type:        'vue-input',
            model:       'name',
            required:    true,
            label:       'Name',
            inputType:   'text',
            isValid(value: string) {
              return value.trim().indexOf(' ') > -1;
            },
            invalidText: 'Please provide fist and last name',
          },
          {
            type:  'slot',
            model: 'foo',
          },
          {
            type:        'vue-input',
            model:       'phone',
            required:    false,
            label:       'Phone',
            inputType:   'phone',
            isValid(value: string) {
              return isPhoneNumberValid(value);
            },
            invalidText: 'This is not a valid phone number!',
          },
          {
            type:        'vue-input',
            model:       'email',
            required:    true,
            label:       'Email',
            inputType:   'email',
            isValid(value: string) {
              return isEmailValid(value);
            },
            invalidText: 'This is not a valid email address!',
          },
          {
            type:     'vue-check-box',
            model:    'terms',
            required: true,
            label:    'I accept the <a href="/terms">Terms and Conditions</a>',
            value:    false,
          },
          {
            type:     'vue-check-box',
            model:    'consent',
            required: false,
            label:    'I consent to get contacted',
            value:    false,
          },
        ],
      } as IFormSchema;

    const wrapper = mount(VueForm, {
      localVue,
      mocks:     { $style },
      propsData: {
        schema,
      },
    });

    expect(wrapper.findAll('form')).toHaveLength(1);
    expect(wrapper.findAll('input')).toHaveLength(5);
  });

  test('integration test for invalid values', () => {
    const schema =
      {
        cancellationText: 'Cancel',
        submitText:       'Submit',
        id:               'myForm',
        name:             'myForm',
        title:            'Register',
        subtitle:         'Please fill in all required fields',
        elements:         [
          {
            type:        'vue-input',
            model:       'name',
            required:    true,
            label:       'Name',
            inputType:   'text',
            isValid(value: string) {
              return value.trim().indexOf(' ') > -1;
            },
            invalidText: 'Please provide fist and last name',
          },
          {
            type:  'slot',
            model: 'foo',
          },
          {
            type:        'vue-input',
            model:       'phone',
            required:    false,
            label:       'Phone',
            inputType:   'phone',
            isValid(value: string) {
              return isPhoneNumberValid(value);
            },
            invalidText: 'This is not a valid phone number!',
          },
          {
            type:        'vue-input',
            model:       'email',
            required:    true,
            label:       'Email',
            inputType:   'email',
            isValid(value: string) {
              return isEmailValid(value);
            },
            invalidText: 'This is not a valid email address!',
          },
          {
            type:     'vue-check-box',
            model:    'terms',
            required: true,
            label:    'I accept the <a href="/terms">Terms and Conditions</a>',
            value:    false,
          },
          {
            type:     'vue-check-box',
            model:    'consent',
            required: false,
            label:    'I consent to get contacted',
            value:    false,
          },
        ],
      } as IFormSchema;
    const wrapper = mount(VueForm, {
      localVue,
      mocks:     { $style },
      propsData: {
        schema,
      },
    });

    const name: any = wrapper.findAll('input').at(0);
    const phone: any = wrapper.findAll('input').at(1);
    const email: any = wrapper.findAll('input').at(2);
    const terms: any = wrapper.findAll('input').at(3);
    const submitButton: any = wrapper.findAll('button').at(0);

    name.element.value = 'foo';
    name.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    phone.element.value = 'foo';
    phone.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    email.element.value = 'foo';
    email.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    terms.element.checked = false;
    terms.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('submit')).toBeFalsy();
  });

  test('integration test for valid values', () => {
    const schema =
      {
        cancellationText: 'Cancel',
        submitText:       'Submit',
        id:               'myForm',
        name:             'myForm',
        title:            'Register',
        subtitle:         'Please fill in all required fields',
        elements:         [
          {
            type:        'vue-input',
            model:       'name',
            required:    true,
            label:       'Name',
            inputType:   'text',
            isValid(value: string) {
              return value.trim().indexOf(' ') > -1;
            },
            invalidText: 'Please provide fist and last name',
          },
          {
            type:  'slot',
            model: 'foo',
          },
          {
            type:        'vue-input',
            model:       'phone',
            required:    false,
            label:       'Phone',
            inputType:   'phone',
            isValid(value: string) {
              return isPhoneNumberValid(value);
            },
            invalidText: 'This is not a valid phone number!',
          },
          {
            type:        'vue-input',
            model:       'email',
            required:    true,
            label:       'Email',
            inputType:   'email',
            isValid(value: string) {
              return isEmailValid(value);
            },
            invalidText: 'This is not a valid email address!',
          },
          {
            type:     'vue-check-box',
            model:    'terms',
            required: true,
            label:    'I accept the <a href="/terms">Terms and Conditions</a>',
            value:    false,
          },
          {
            type:     'vue-check-box',
            model:    'consent',
            required: false,
            label:    'I consent to get contacted',
            value:    false,
          },
        ],
      } as IFormSchema;
    const wrapper = mount(VueForm, {
      localVue,
      mocks:     { $style },
      propsData: {
        schema,
      },
    });

    const name: any = wrapper.findAll('input').at(0);
    const phone: any = wrapper.findAll('input').at(1);
    const email: any = wrapper.findAll('input').at(2);
    const terms: any = wrapper.findAll('input').at(3);
    const submitButton: any = wrapper.findAll('button').at(0);

    name.element.value = 'foo bar';
    name.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    phone.element.value = '1337';
    phone.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    email.element.value = 'foo@bar';
    email.trigger('change');
    expect(submitButton.attributes().disabled).toBe('disabled');

    terms.element.checked = true;
    terms.trigger('change');
    expect(submitButton.attributes().disabled).toBe(undefined);

    wrapper.find('form').trigger('submit');
    expect(wrapper.emitted('submit')).toBeTruthy();
  });

  test('integration test to reset form', () => {
    const schema =
      {
        cancellationText: 'Cancel',
        submitText:       'Submit',
        id:               'myForm',
        name:             'myForm',
        title:            'Register',
        subtitle:         'Please fill in all required fields',
        elements:         [
          {
            type:        'vue-input',
            model:       'name',
            required:    true,
            isValid(value: string) {
              return value.trim().indexOf(' ') > -1;
            },
            invalidText: 'Please provide fist and last name',
          },
          {
            type:  'slot',
            model: 'foo',
          },
          {
            type:        'vue-input',
            model:       'phone',
            required:    false,
            label:       'Phone',
            inputType:   'phone',
            isValid(value: string) {
              return isPhoneNumberValid(value);
            },
            invalidText: 'This is not a valid phone number!',
          },
          {
            type:        'vue-input',
            model:       'email',
            required:    true,
            label:       'Email',
            inputType:   'email',
            isValid(value: string) {
              return isEmailValid(value);
            },
            invalidText: 'This is not a valid email address!',
          },
          {
            type:     'vue-check-box',
            model:    'terms',
            required: true,
            label:    'I accept the <a href="/terms">Terms and Conditions</a>',
            value:    false,
          },
          {
            type:     'vue-check-box',
            model:    'consent',
            required: false,
            value:    false,
          },
        ],
      } as IFormSchema;
    const wrapper = mount(VueForm, {
      localVue,
      mocks:     { $style },
      propsData: {
        schema,
      },
    });

    const name: any = wrapper.findAll('input').at(0);
    const phone: any = wrapper.findAll('input').at(1);
    const email: any = wrapper.findAll('input').at(2);
    const terms: any = wrapper.findAll('input').at(3);
    const submitButton: any = wrapper.findAll('button').at(0);
    const cancelButton: any = wrapper.findAll('button').at(1);

    name.element.value = 'foo bar';
    name.trigger('change');
    phone.element.value = '1337';
    phone.trigger('change');
    email.element.value = 'foo@bar';
    email.trigger('change');
    terms.element.checked = true;
    terms.trigger('change');
    expect(submitButton.attributes().disabled).toBe(undefined);

    cancelButton.trigger('click');
    expect(submitButton.attributes().disabled).toBe('disabled');
  });

});
