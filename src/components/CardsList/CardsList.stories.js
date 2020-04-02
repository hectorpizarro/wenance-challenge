/**
 * CardsList storybooks tests
 */
import React from 'react';
import { InternalCardsList as CardsList } from './CardsList';
import { addProviderDecorator } from '../../../.storybook/utils';
import {
  STATUS_LOADING,
  STATUS_IDLE,
  STATUS_LOADED
} from '../../redux/people.slice';

export default {
  title: '4 - CardsList',
  component: CardsList,
  parameters: {
    notes: 'CardsList, lists people cards.'
  },
  decorators: [addProviderDecorator]
};

// Mock cards data to show in a list
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
    status={STATUS_IDLE}
    search="Apple"
    peopleList={peopleList}
    error="error"
  />
);

export const Loading = () => (
  <CardsList
    status={STATUS_LOADING}
    search="Apple"
    peopleList={peopleList}
    error=""
  />
);

export const Error = () => (
  <CardsList
    status={STATUS_LOADED}
    search="Apple"
    peopleList={peopleList}
    error="No data"
  />
);

export const NoPeople = () => (
  <CardsList status={STATUS_LOADED} search="Apple" peopleList={[]} error="" />
);

export const Desktop = () => (
  <CardsList
    status={STATUS_LOADED}
    search="Apple"
    peopleList={peopleList}
    error=""
  />
);

export const Mobile = () => (
  <CardsList
    status={STATUS_LOADED}
    search="Apple"
    peopleList={peopleList}
    error=""
  />
);
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
