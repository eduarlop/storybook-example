import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(story => <div className='storybook-body' >{story()}</div>)
  .add('default', () => (
    <Button onClick={action('clicked')}>
      Add to Cart
    </Button>
  ))
  .add('primary', () => (
    <Button className="primary" onClick={action('clicked')}>
      Add to Cart
    </Button>
  ))
  .add('with icon', () => (
    <Button className="primary" icon="shopping-cart" onClick={action('clicked')}>
      Add to Cart
    </Button>
  ));
