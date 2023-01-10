module.exports = function ruleAddMdx(config) {
  // mdx file should use the same rules as tsx
  forEachRule(config.module, (e) => {
    if ('test' in e) {
      if (typeof e.test === 'object' && Symbol.match in e.test) {
        if (e.test.source.includes('tsx')) {
          e.test = new RegExp(e.test.source.replace('tsx', 'tsx|mdx|md'), e.test.flags);
        }
      }
    }
  });

  // add mdx as first loader
  config.module.rules.push({
    test: /\.(mdx|md)$/,
    use: [
      {
        // custom loader to add 'use client'
        loader: require.resolve('./post-mdx')
      },
      {
        loader: require.resolve('@mdx-js/loader'),
        options: {
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    ],
  });
};

function arr(v) {
  if (v === undefined) {
    return [];
  }
  return Array.isArray(v) ? v : [v];
}

function forEachRule(rule, cb) {
  arr(rule).forEach((e) => {
    if ('oneOf' in e) {
      forEachRule(e.oneOf, cb);
    }
    if ('rules' in e) {
      forEachRule(e.rules, cb);
    }
    cb(e);
  });
}