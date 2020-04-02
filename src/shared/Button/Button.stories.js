import React from 'react';
import Button from './Button';

const noop = () => {};

export default {
  title: 'Button',
  component: Button,
  parameters: {
    notes: 'Button, used on Search component and inside each card.'
  }
};

export const ButtonDefault = () => <Button label="Test" onClick={noop} />;

export const ButtonDisabled = () => (
  <Button label="Test" onClick={noop} disabled />
);
