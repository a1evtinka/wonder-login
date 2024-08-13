module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    es2021: true, 
    node: true,  
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended', 
    'airbnb',  
    'plugin:import/errors',  
    'plugin:import/warnings', 
    'plugin:import/typescript',  
    'plugin:boundaries/recommended', 
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, 
    },
    ecmaVersion: 'latest',  
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    'react',  
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],  
        moduleDirectory: ['node_modules', 'src/'],  
        paths: ['src'],  
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off', 
    'no-use-before-define': ['off'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], 
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-unused-vars': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'linebreak-style': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 2, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 2, consistent: true },
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'object-curly-spacing': ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
      },
    },
  ],
};
