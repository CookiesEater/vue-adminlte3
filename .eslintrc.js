module.exports = {
  extends: ['plugin:vue/recommended', 'airbnb-base'], // Порядок важен
  plugins: ['import'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    // IDE само тут может помочь с мягкими переносами, да и иногда просто бывают такие длинные строки
    'max-len': 'off',

    // Во vuex это используется часто
    'no-param-reassign': [2, { props: false }],

    // Разрешить конструкции типа i++ только в for()
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],

    // Непонятно как код смотреть если все атрибуту будут на новой строке
    'vue/max-attributes-per-line': [2, {
      singleline: 10,
      multiline: {
        max: 3,
        allowFirstLine: true,
      },
    }],

    'import/no-extraneous-dependencies': 'off',
  },
};
