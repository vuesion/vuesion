import stylelint from 'stylelint';

const ruleName = 'vuesion/namespaced-include';
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: () => `Mixin usage must be namespaced (e.g. ds.media-min). Found un-namespaced @include.`,
});

export default stylelint.createPlugin(ruleName, (primaryOption, secondaryOptions = {}) => {
  const allow = secondaryOptions.allow || [];

  const nsRegex = /^[a-z0-9]+[a-z0-9-]*\.[a-z0-9-]+(\s*\(|$)/i;

  return (root, result) => {
    root.walkAtRules('include', (atRule) => {
      const params = (atRule.params || '').trim();
      const callee = params.split('(')[0].trim();

      if (allow.includes(callee)) {
        return;
      }

      if (!nsRegex.test(params)) {
        stylelint.utils.report({
          ruleName,
          result,
          message: messages.expected(),
          node: atRule,
          word: atRule.toString(),
        });
      }
    });
  };
});

export { ruleName, messages };
