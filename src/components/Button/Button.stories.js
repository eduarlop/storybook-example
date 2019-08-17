import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>
      Add to Cart
    </Button>
  ))
  .add('primary', () => (
    <Button className="primary" onClick={action('clicked')}>
      Add to Cart
    </Button>
  ));
