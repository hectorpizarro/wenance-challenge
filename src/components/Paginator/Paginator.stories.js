import React from 'react';
import Paginator from './Paginator';

const noop = () => {};

export default {
  title: 'Paginator',
  component: Paginator,
  parameters: {
    notes: 'Paginator, provides Previous, Next buttons for pagination.'
  }
};

export const NoPrevious = () => (
  <Paginator page="1" count="30" doPrevious={noop} doNext={noop} />
);

export const Default = () => (
  <Paginator page="2" count="30" doPrevious={noop} doNext={noop} />
);

export const NoNext = () => (
  <Paginator page="3" count="30" doPrevious={noop} doNext={noop} />
);

export const NoData = () => (
  <Paginator page="1" count="0" doPrevious={noop} doNext={noop} />
);
