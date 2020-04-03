/**
 * Paginator storybook tests
 */
import React from 'react';
import { InternalPaginator as Paginator } from './Paginator';

export default {
  title: '3 - Paginator',
  component: Paginator,
  parameters: {
    notes: 'Paginator, provides Previous, Next buttons for pagination.'
  }
};

export const NoPrevious = () => (
  <Paginator page={1} count={30} disabled={false} />
);

export const Default = () => <Paginator page={2} count={30} disabled={false} />;

export const NoNext = () => <Paginator page={3} count={30} disabled={false} />;

export const NoData = () => <Paginator page={1} count={0} disabled={false} />;

export const DisabledOnLoading = () => (
  <Paginator page={1} count={0} disabled />
);
