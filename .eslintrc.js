module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 自定义规则
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 单引号
        semi: false // 不要分号
        // printWidth: 160 //换行
      }
    ]
  }
}
