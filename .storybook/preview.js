import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/conf';
import { GlobalStyle } from '../src/App';

// Add Styled Components theme and global styles to all stories
const addTheme = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div style={{ border: '1px dotted gray', margin: '10px' }}>{storyFn()}</div>
  </ThemeProvider>
);
addDecorator(addTheme);

// Define custom viewports to test responsive stories
const customViewPorts = {
  // Old mobile viewport
  iphone5: {
    name: 'iPhone 5 320w x 568h',
    styles: {
      height: '568px',
      width: '320px'
    },
    type: 'mobile'
  },
  // Minimal desktop viewport, 640px width
  width640: {
    name: 'width 640px',
    styles: {
      height: '640px',
      width: '640px'
    },
    type: 'mobile'
  },
  // Ipad viewport
  ipad: {
    name: 'iPad 768w x 1024h',
    styles: {
      height: '1024px',
      width: '768px'
    },
    type: 'tablet'
  },
  // Standard desktop viewport, 1024x768
  desktop: {
    name: 'Desktop 1024w x 768h',
    styles: {
      height: '768px',
      width: '1024px'
    },
    type: 'desktop'
  }
};

addParameters({
  options: {
    // Sort all story sections alphabetically
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports: customViewPorts,
    // All stories are loaded in a 'desktop' viewport by default
    defaultViewport: 'desktop'
  }
});
