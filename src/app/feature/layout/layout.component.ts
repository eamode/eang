import { Component, OnInit } from '@angular/core'
import { Subject } from 'rxjs'
import { EangElement } from '@eamode/eang'

@Component({
  selector: 'eangio-layout',
  templateUrl: './layout.component.html',
  styles: [
    `
      ul {
        list-style-type: circle;
      }
    `
  ]
})
export class LayoutComponent implements OnInit {
  activate = new Subject<EangElement>()

  ea_layout_attrs = `
  *layout.component.html*
  ~~~html
    <ea-layout>
      <ea-toolbar>
        <!-- Toolbar Content here -->
      </ea-toolbar>

      <ea-drawer>
        <!-- Drawer Content here -->
      </ea-drawer>

      <ea-main>
        <ea-body>
          <!-- Body content here -->
        </ea-body>
      </ea-main>
    </ea-layout>
  ~~~
  `
  ea_layout_grid = `
  *layout.css*
  ~~~css
  .mode{
    ea-layout {
      display: grid;
      height: 100vh;
      overflow: hidden;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        'toolbar toolbar'
        'drawer main';
    }
  }
  ~~~
  `

  ea_layout_import = `
  *module.ts*
  ~~~ts
  import { LayoutModule } from '@eamode/eang';
  ...
  @NgModule({
    imports: [ LayoutModule ]
  })
  ~~~
  `
  ea_layout_drawer = `
  *layout.component.html*
  ~~~html
    <ea-drawer [drawerState$]="layout.drawerState$">
      <header>
      <!-- Drawer <header> content-->
      </header>
      <section>
        <a href="/your-link-here"></a>
      </section>
      <footer>
        <!-- Drawer <footer> content-->
      </footer>
    </ea-drawer>
  ~~~
  `

  ea_drawer_attrs = `
  |  Attributes   | Description  |
  |---|---|
  |  Closed   |  this would set the panel to its closed state   |
  |  Maximized   |  this would set the panel to its maximized, or open, state   |
  `

  ea_toolbar_attrs = `
  |  Attributes   | Description  |
  |---|---|
  |  Shadow   |  Sets a drop shadow on the ea-toolbar   |
  |  Flex   |  Sets the properties of the toolbar to be flex with space-between a two child element layout  |
  `

  ea_toolbar_left_center_right = `
  |  Attributes   | Description  |
  |---|---|
  |  left   |  Sets a tag before &lt;header&gt; |
  |  center  |  Sets a tag between &lt;header&gt; and &lt;aside&gt; |
  |  right   |  Sets a tag after &lt;aside&gt; |
  `

  ea_toolbar_position_example = `
  *layout.component.html*
  ~~~html
  <ea-layout>
    <ea-toolbar>
      <div left>
        <img src="...any logo...">
      </div>

      <header>
        <a routerLink="/about">About</a>
      </header>

      <input type="tel" center>

      <aside>
        <button class="ea-button">Log out</button>
      </aside>

      <span right>
        <p center>Text after aside</p>
      </span>
    </ea-toolbar>
  ...
  </ea-layout>
  ~~~
  `
  constructor() {}

  ngOnInit() {}
}
