import React from 'react';
import { InternalMain as Main } from './Main';
import { addProviderDecorator } from '../../.storybook/utils';

const peoplePage = {
  count: 123,
  records: [
    {
      name: 'Luke Skywalker',
      height: '172',
      gender: 'male'
    },
    {
      name: 'C-3PO',
      height: '167',
      gender: 'n/a'
    },
    {
      name: 'R2-D2',
      height: '96',
      gender: 'n/a'
    },
    {
      name: 'Darth Vader',
      height: '202',
      gender: 'male'
    },
    {
      name: 'Leia Organa',
      height: '150',
      gender: 'female'
    },
    {
      name: 'Owen Lars',
      height: '178',
      gender: 'male'
    },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      gender: 'female'
    },
    {
      name: 'R5-D4',
      height: '97',
      gender: 'n/a'
    },
    {
      name: 'Biggs Darklighter',
      height: '183',
      gender: 'male'
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      gender: 'male'
    }
  ]
};

export default {
  title: '1 - Main',
  component: Main,
  parameters: {
    notes: 'Main, shows search form, paginator, cards list.'
  },
  decorators: [addProviderDecorator]
};

export const DesktopLoading = () => (
  <Main isLoading page={1} peoplePage={peoplePage} error="" />
);

export const DesktopError = () => (
  <Main
    isLoading={false}
    page={1}
    peoplePage={peoplePage}
    error="An error message"
  />
);

export const Desktop = () => (
  <Main isLoading={false} page={1} peoplePage={peoplePage} error="" />
);

export const MobileLoading = () => (
  <Main isLoading page={1} peoplePage={peoplePage} error="" />
);
MobileLoading.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};

export const Mobile = () => (
  <Main isLoading={false} page={1} peoplePage={peoplePage} error="" />
);
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
