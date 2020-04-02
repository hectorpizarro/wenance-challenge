import React from 'react';
import { InternalCard as Card } from './Card';
import { noop } from '../../../.storybook/utils';

export default {
  title: '5 - Card',
  component: Card,
  parameters: {
    notes: 'Card, shows specific people detail.'
  }
};

const people = {
  name: 'Luke Skywalker',
  height: '172',
  gender: 'male'
};

export const Desktop = () => <Card people={people} onDelete={noop} />;

export const Mobile = () => <Card people={people} onDelete={noop} />;
Mobile.story = {
  parameters: {
    viewport: { defaultViewport: 'iphone5' }
  }
};
