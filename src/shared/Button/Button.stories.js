/**
 * Button Storybook tests
 */
import React from 'react';
import Button from './Button';
import { noop } from '../../../.storybook/utils';

export default {
  title: '6 - Button',
  component: Button,
  parameters: {
    notes: 'Button, used on Search, Card, Paginator.'
  }
};

export const ButtonDefault = () => <Button label="Test" onClick={noop} />;

export const ButtonDisabled = () => (
  <Button label="Test" onClick={noop} disabled />
);
