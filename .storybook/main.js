module.exports = {
  stories: ['../src/**/*.stories.js', '../src/**/*.stories.jsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register'
  ]
};
