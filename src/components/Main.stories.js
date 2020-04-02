/**
 * Main Storybook tests
 */
import React from 'react';
import Main from './Main';
import { addProviderDecoratorLoading } from '../../.storybook/utils';

export default {
  title: '1 - Main',
  component: Main,
  parameters: {
    notes: 'Main, shows search form, paginator, cards list.'
  }
};

export const DesktopLoading = () => <Main />;
DesktopLoading.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' }
  },
  decorators: [addProviderDecoratorLoading]
};
export const MobileLoading = () => <Main />;
MobileLoading.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  },
  decorators: [addProviderDecoratorLoading]
};
