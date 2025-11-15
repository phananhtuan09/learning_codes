import nextConfig from 'eslint-config-next';

const base = Array.isArray(nextConfig) ? nextConfig : [nextConfig];

export default [
  ...base,
  {
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
];
