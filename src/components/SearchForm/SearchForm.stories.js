import React from 'react';
import { InternalSearchForm as SearchForm } from './SearchForm';
import { noop } from '../../../.storybook/utils';

export default {
  title: '2 - SearchForm',
  component: SearchForm,
  parameters: {
    notes: 'Search component.'
  }
};

export const Desktop1024x768 = () => (
  <SearchForm search="test" handleSearch={noop} disabled={false} />
);
Desktop1024x768.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' }
  }
};

export const DesktopDisabled = () => (
  <SearchForm search="test" handleSearch={noop} disabled />
);
DesktopDisabled.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' }
  }
};

export const Ipad = () => (
  <SearchForm search="test" handleSearch={noop} disabled={false} />
);
Ipad.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' }
  }
};

export const Width640px = () => (
  <SearchForm search="test" handleSearch={noop} disabled={false} />
);
Width640px.story = {
  parameters: {
    viewport: { defaultViewport: 'width640' }
  }
};

export const Mobile = () => (
  <SearchForm search="test" handleSearch={noop} disabled={false} />
);
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
