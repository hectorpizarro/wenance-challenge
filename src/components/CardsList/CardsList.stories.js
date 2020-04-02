import React from 'react';
import { InternalCardsList as CardsList } from './CardsList';
import { addProviderDecorator } from '../../../.storybook/utils';

export default {
  title: '4 - CardsList',
  component: CardsList,
  parameters: {
    notes: 'CardsList, lists people cards.'
  },
  decorators: [addProviderDecorator]
};

const peopleList = [
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
];

export const EmptyAtStart = () => (
  <CardsList
    isLoading
    search="Apple"
    peopleList={peopleList}
    error="error"
    isIdle
  />
);

export const Loading = () => (
  <CardsList
    isLoading
    search="Apple"
    peopleList={peopleList}
    error=""
    isIdle={false}
  />
);

export const Error = () => (
  <CardsList
    isLoading={false}
    search="Apple"
    peopleList={peopleList}
    error="No data"
    isIdle={false}
  />
);

export const NoPeople = () => (
  <CardsList
    isLoading={false}
    search="Apple"
    peopleList={[]}
    error=""
    isIdle={false}
  />
);

export const Desktop = () => (
  <CardsList
    isLoading={false}
    search="Apple"
    peopleList={peopleList}
    error=""
    isIdle={false}
  />
);

export const Mobile = () => (
  <CardsList
    isLoading={false}
    search="Apple"
    peopleList={peopleList}
    error=""
    isIdle={false}
  />
);
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
