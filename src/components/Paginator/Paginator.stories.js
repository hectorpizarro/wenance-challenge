import React from 'react';
import Paginator from './Paginator';

const noop = () => {};

export default {
  title: '3 - Paginator',
  component: Paginator,
  parameters: {
    notes: 'Paginator, provides Previous, Next buttons for pagination.'
  }
};

export const NoPrevious = () => (
  <Paginator page="1" count="30" handlePrevious={noop} handleNext={noop} />
);

export const Default = () => (
  <Paginator page="2" count="30" handlePrevious={noop} handleNext={noop} />
);

export const NoNext = () => (
  <Paginator page="3" count="30" handlePrevious={noop} handleNext={noop} />
);

export const NoData = () => (
  <Paginator page="1" count="0" handlePrevious={noop} handleNext={noop} />
);
