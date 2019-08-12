import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'eangio-button',
  templateUrl: './button.component.html',
  styles: [
    `
      div {
        --ea-grid-col-min-width: calc(var(--ea-sizer) * 8em);
      }
    `
  ]
})
export class ButtonComponent implements OnInit {
  button = `
  ~~~html
  <button class="ea-button">Button</button>
  <button class="ea-button" active>Active</button>
  <button class="ea-button" disabled>Disabled</button>
  <button class="ea-button" primary>Primary</button>
  <button class="ea-button" outline>Outline</button>
  <button class="ea-button" flat>Flat</button>
  ~~~
  `

  tags = `
  ~~~html
  <button class="ea-button" style="--ea-button-border-radius: 1em">Button</button>
  <button class="ea-button" style="--ea-button-background: var(--ea-color-success);">Success</button>
  ~~~
  `

  button_sizing = `
  ~~~html
  <button class="ea-button" sm rounded><span icon filter></span>[sm]</button>
  <button class="ea-button" md outline rounded>[md]</button>
  <button class="ea-button" lg rounded>[lg]</button>
  <button class="ea-button" xl flat>[xl]</button>
  <button class="ea-button" xxl>[xxl]</button>
  ~~~
  `

  icons = `
  *app-component.html*
  ~~~html
  <button class="ea-button" style="--ea-button-margin: 1em; --ea-button-padding: 1em 1em;" large>
    <span role="icon" style="--ea-button-icon: var(--ea-icon-sign-in); --ea-icon-margin: 0 0.5em 0 0;" icon></span>
    {{Button}}
  </button>
  ~~~

  `
  constructor() {}

  ngOnInit() {}
}
