import { describe, test, expect } from 'vitest';
import { getTranslationObject, getTranslationsFromString, sanitizeMessage } from './utils';

const testContent = `<div>
      {{ $t('test' /* this is a test */) }}
      
      {{ $t('test.test') }}
      
      {{ foo === 1 ? $t('foo' /* Foo */) : $t('bar' /* bar */) }}
      
      {{ $t('test.foo' /* test (test) [test] test */) }}
      
      {{ $t('test.foo2' /* test (test) [test] test */) }}
      
      {{ $t("test.bar" /* test (test) [test] test */) }}
      
      <small>{{ $t('App.nav.counter' /* Counter */) }}</small>
      
      text:  this.$t('components.register.submit.notification.text', model /* We've sent an email to: {email}! */),
      
      $t('components.markdown' /*
      # Markdown support\\n
      - build on top of marked\\n
      - server side rendering!!!\\n
      - \`github style\` markdown
      */)
      
           <vue-input
              id="password"
              v-model="password"
              name="password"
              type="password"
              required
              :label="$t('common.password' /* Password */)"
              :placeholder="$t('common.password.placeholder' /* Enter any password */)"
              validation="required|min:6"
              :error-message="$t('auth.LoginForm.password.error' /* The password has to have at least 6 characters */)"
            />
      
	    {{
        $t(
          'key',
          { key: value } /* key:
      {key}? */,
        )
      }}    
      
      return this.$t(
          'console.blocks.components.blockCard.notValid' /* Block failed to be uploaded. Please verify your manifest and try again */,
        );
      } /* istanbul ignore else */ else if (this.disabled) { 

      this.t('key.from.normal.t.function' /* translation */);

      i18n.t('function.from.i18n' /* translation */);

      return this.t(
          't.function.test' /* Block failed to be uploaded. Please verify your manifest and try again */,
        );
      } /* istanbul ignore else */ else if (this.disabled) { 
      
          else if (foo === 'foo') {
        return vm.$t(
          'fii.faa.question.fuu' /* fii.faa.question.fuu? */,
        );
    const bar = computed(() => {
      if (value === 'blubb') {
        return vm.$t(
          'eins.zwei.drei.vier.fuenf' /* eins.zwei.drei.vier.fuenf */,
        );
      } else if (value === '1337') {
        return vm.$t(
          'one.two.three.four.five' /* one.two.three.four.five */,
        );
      } else if (value === 'balla balla') {
        return vm.$t(
          'whoop.whooooop.whop.whoooop' /* whoop.whooooop.whop.whoooop*/,
        );
      } else if (value === 'Juan') {
        return vm.$t(
          'Juan.Martin.Dennis.Charly.Hugo' /* Juan.Martin.Dennis.Charly.Hugo */,
        );
      } else if (value === 'ihhahhhh') {
        return vm.$t('cloud.tifa.barrett.aerith.sephiroth' /* cloud.tifa.barrett.aerith.sephiroth */);
      }
    });
    
    myFunction() {
      return this.myCondition
        ? this.$t(
            'my.super.duper.translation-key',
            {
              option: this.myOption,
            } /* String with option: {option} */,
          )
        : null;
    },
    
    myFunction() {
      return this.myCondition
        ? this.$t(
            'key-with-brackets',
            {
              option: this.myOption,
            } /* String with option: ({option}) */,
          )
        : null;
    },
    
    myFunction() {
      return this.myCondition
        ? this.$t(
            'key-with-squared-brackets',
            {
              option: this.myOption,
            } /* String with option: [{option})] */,
          )
        : null;
    },
    
    myFunction() {
      return this.myCondition
        ? this.$t(
            'key-with-multiple-non-alpha-characters',
            {
              option: this.myOption,
            } /* {option}, :-/()=?ß12324346346§$%"$!"$1241$"§% */,
          )
        : null;
    },
    </div>
    
const title = t('pages.index.title' /* Vuesion - The boilerplate for product teams */);`;

describe('Utils', () => {
  test('should remove comments, line breaks and double white spaces', () => {
    const message = `/*
    test \\n test
    test

    test
    */`;

    expect(sanitizeMessage(message)).toBe('test \\n test test test');
  });

  test('should escape double quotes', () => {
    const message = `/* "foo" */`;

    expect(sanitizeMessage(message)).toBe('\\"foo\\"');
  });

  test('should replace <> with []', () => {
    const message = `/* [a]test[/a] */`;

    expect(sanitizeMessage(message)).toBe('<a>test</a>');
  });

  test('should get a translation object', () => {
    expect(getTranslationObject(getTranslationsFromString(testContent))).toEqual({
      'App.nav.counter': 'Counter',
      bar: 'bar',
      'components.register.submit.notification.text': "We've sent an email to: {email}!",
      foo: 'Foo',
      'function.from.i18n': 'translation',
      key: 'key: {key}?',
      'key.from.normal.t.function': 'translation',
      't.function.test': 'Block failed to be uploaded. Please verify your manifest and try again',
      test: 'this is a test',
      'test.foo': 'test (test) <test> test',
      'test.foo2': 'test (test) <test> test',
      'components.markdown':
        '# Markdown support\\n - build on top of marked\\n - server side rendering!!!\\n - `github style` markdown',
      'console.blocks.components.blockCard.notValid':
        'Block failed to be uploaded. Please verify your manifest and try again',
      'common.password': 'Password',
      'common.password.placeholder': 'Enter any password',
      'auth.LoginForm.password.error': 'The password has to have at least 6 characters',
      'Juan.Martin.Dennis.Charly.Hugo': 'Juan.Martin.Dennis.Charly.Hugo',
      'cloud.tifa.barrett.aerith.sephiroth': 'cloud.tifa.barrett.aerith.sephiroth',
      'eins.zwei.drei.vier.fuenf': 'eins.zwei.drei.vier.fuenf',
      'fii.faa.question.fuu': 'fii.faa.question.fuu?',
      'one.two.three.four.five': 'one.two.three.four.five',
      'whoop.whooooop.whop.whoooop': 'whoop.whooooop.whop.whoooop',
      'my.super.duper.translation-key': 'String with option: {option}',
      'key-with-brackets': 'String with option: ({option})',
      'key-with-squared-brackets': 'String with option: <{option})>',
      'key-with-multiple-non-alpha-characters': '{option}, :-/()=?ß12324346346§$%\\"$!\\"$1241$\\"§%',
      'pages.index.title': 'Vuesion - The boilerplate for product teams',
    });
  });

  test('should get an empty translation object', () => {
    expect(getTranslationObject(getTranslationsFromString(''))).toEqual({});
  });
});
