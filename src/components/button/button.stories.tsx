import React from 'react';
import { storiesOf, } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info'
import Button, { ButtonType } from '.';

storiesOf('Button 组件', module)
  .addDecorator((storyFn) => <div style={{ padding: 30 }}>{storyFn()}</div>)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      styles: {
        header: {
          h1: {
            marginBottom: 10
          },
          h2:{
            fontSize: 14,
            color: '#37f'
          }
        },
      },
    },
  })
  .add('with text', () => <Button btnType={ButtonType.Danger} onClick={action('clicked')}>Danger Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));