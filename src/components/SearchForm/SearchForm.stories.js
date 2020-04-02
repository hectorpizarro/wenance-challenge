import React from 'react';
import SearchForm from './SearchForm';

const noop = () => {};

export default {
  title: 'Search',
  component: SearchForm,
  parameters: {
    notes: 'Search component.'
  }
};

export const Desktop1024x768 = () => (
  <SearchForm searchTerm="test" handleSearch={noop} handleSearchChange={noop} />
);
Desktop1024x768.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' }
  }
};

export const DesktopDisabled = () => (
  <SearchForm
    searchTerm="test"
    handleSearch={noop}
    handleSearchChange={noop}
    disabled
  />
);
DesktopDisabled.story = {
  parameters: {
    viewport: { defaultViewport: 'desktop' }
  }
};

export const Ipad = () => (
  <SearchForm searchTerm="test" handleSearch={noop} handleSearchChange={noop} />
);
Ipad.story = {
  parameters: {
    viewport: { defaultViewport: 'ipad' }
  }
};

export const Width640px = () => (
  <SearchForm searchTerm="test" handleSearch={noop} handleSearchChange={noop} />
);
Width640px.story = {
  parameters: {
    viewport: { defaultViewport: 'width640' }
  }
};

export const Mobile = () => (
  <SearchForm searchTerm="test" handleSearch={noop} handleSearchChange={noop} />
);
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
