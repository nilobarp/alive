import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '../src/elements/button';

storiesOf('Button', module).add('default', () => ({
  components: { Button },
  template: `<div>
    <table style="border=0">
      <tr>
        <td>Variants</td>
      </tr>
      <tr>
        <td><Button variant="default">Default</Button></td>
        <td><Button variant="primary">Primary</Button></td>
        <td><Button variant="secondary">Secondary</Button></td>
        <td><Button variant="accent">Accent</Button></td>
      </tr>
      <tr>
        <td>Sizes</td>
      </tr>
      <tr>
        <td><Button variant="default" size="small">Small</Button></td>
        <td><Button variant="primary">Default</Button></td>
        <td><Button variant="secondary" size="large">Large</Button></td>
      </tr>
      <tr>
        <td>Flat style</td>
      </tr>
      <tr>
        <td><Button flat variant="default">Default</Button></td>
        <td><Button flat variant="primary">Primary</Button></td>
        <td><Button flat variant="secondary">Secondary</Button></td>
        <td><Button flat variant="accent">Accent</Button></td>
      </tr>
      <tr>
        <td>Ghost style</td>
      </tr>
      <tr>
        <td><Button ghost variant="default">Default</Button></td>
        <td><Button ghost variant="primary">Primary</Button></td>
        <td><Button ghost variant="secondary">Secondary</Button></td>
        <td><Button ghost variant="accent">Accent</Button></td>
      </tr>
      <tr>
        <td>Mixes</td>
      </tr>
      <tr>
        <td><Button flat variant="default" size="small">Small flat button</Button></td>
        <td><Button ghost variant="primary">Default primary ghost button</Button></td>
      </tr>
    </table>
    `,
  methods: { action: () => console.log('clicked') }
}));

// storiesOf('Button', module)
//   .add('with text', () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action('clicked') },
//   }))
//   .add('with JSX', () => ({
//     components: { MyButton },
//     // eslint-disable-next-line no-unused-vars
//     render(h) {
//       return <my-button onClick={this.action}>With JSX</my-button>;
//     },
//     methods: { action: linkTo('clicked') },
//   }))
//   .add('with some emoji', () => ({
//     components: { MyButton },
// template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action('clicked') },
//   }));
