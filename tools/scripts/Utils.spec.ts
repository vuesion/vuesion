import { getTranslationObject, getTranslationsFromString, sanitizeMessage } from './Utils';

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
      
	    {{
        $t(
          'key',
          { key: value } /* key:
      {key}? */,
        )
      }}      
    </div>`;

describe('Utils', () => {
  test('should remove comments, line breaks and double white spaces', () => {
    const message: string = `/*
    test \\n test
    test

    test
    */`;

    expect(sanitizeMessage(message)).toBe('test \\n test test test');
  });

  test('should escape double quotes', () => {
    const message: string = `/* "foo" */`;

    expect(sanitizeMessage(message)).toBe('\\"foo\\"');
  });

  test('should replace <> with []', () => {
    const message: string = `/* [a]test[/a] */`;

    expect(sanitizeMessage(message)).toBe('<a>test</a>');
  });

  test('should parse translations from a string', () => {
    expect(getTranslationsFromString(testContent)).toEqual([
      "$t('test' /* this is a test */)",
      "$t('foo' /* Foo */)",
      "$t('bar' /* bar */)",
      "$t('test.foo' /* test (test) [test] test */)",
      "$t('test.foo2' /* test (test) [test] test */)",
      '$t("test.bar" /* test (test) [test] test */)',
      "$t('App.nav.counter' /* Counter */)",
      "$t('components.register.submit.notification.text', model /* We've sent an email to: {email}! */)",
      "$t('components.markdown' /*\n      # Markdown support\\n\n      - build on top of marked\\n\n      - server side rendering!!!\\n\n      - `github style` markdown\n      */)",
      "$t(\n          'key',\n          { key: value } /* key:\n      {key}? */,\n        )",
    ]);

    expect(getTranslationsFromString('')).toEqual([]);
  });

  test('should get a translation object', () => {
    expect(getTranslationObject(getTranslationsFromString(testContent))).toEqual({
      'App.nav.counter': 'Counter',
      bar: 'bar',
      'components.register.submit.notification.text': "We've sent an email to: {email}!",
      foo: 'Foo',
      key: 'key: {key}?',
      test: 'this is a test',
      'test.foo': 'test (test) <test> test',
      'test.foo2': 'test (test) <test> test',
      'components.markdown':
        '# Markdown support\\n - build on top of marked\\n - server side rendering!!!\\n - `github style` markdown',
    });
  });
});
