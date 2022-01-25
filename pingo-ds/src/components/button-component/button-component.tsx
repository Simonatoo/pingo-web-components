import { Component, h } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl:'button-component.scss' ,
  shadow: true,
})
export class ButtonComponent {

  render() {
    return (
      <div class={'teste'}>
        <p class={'p'}>Hello World!</p>
      </div>
    );
  }

}
