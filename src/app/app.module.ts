import { BrowserModule } from '@angular/platform-browser'
import { NgModule, Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import {
  LayoutModule,
  PanelModule,
  AutoCompleteModule,
  ThemePickerModule,
  MarkdownModule,
  MenuModule,
  TabsModule
} from '@eamode/eang'

import {
  MdcButtonModule,
  MdcRippleModule,
  MdcRadioModule
} from '@angular-mdc/web'

import { ReactiveComponent } from './feature/reactive/reactive.component'
import { ThemingComponent } from './feature/theming/theming.component'
import { LayoutComponent } from './components/layout/layout.component'
import { ButtonComponent } from './components/button/button.component'
import { HomeComponent } from './feature/home/home.component'
import { CardComponent } from './components/card/card.component'
import { IconComponent } from './feature/icon/icon.component'
import { VariablesComponent } from './variables/variables.component'
import { GetStartedComponent } from './feature/get-started/get-started.component'
import { MenuComponent } from './components/menu/menu.component'
import { LandingComponent } from './feature/landing/landing.component'
import { ComponentsComponent } from './feature/components/components.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { UtilitiesComponent } from './utilities/utilities.component'
import { MarkdownComponent } from './components/markdown/markdown.component'
import { ListComponent } from './components/list/list.component'
import { CssExamplesComponent } from './components/css-examples/css-examples.component'
import { TooltipComponent } from './components/tooltip/tooltip.component'
import { TableComponent } from './components/table/table.component'
import { InputsComponent } from './components/inputs/inputs.component'
import { ColorDisplayComponent } from './component/color-display/color-display.component'

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'theming', component: ThemingComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'css-examples', component: CssExamplesComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'card', component: CardComponent },
  { path: 'list', component: ListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'getting-started', component: GetStartedComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'variables', component: VariablesComponent },
  { path: 'features', component: HomeComponent },
  { path: 'utilities', component: UtilitiesComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'adjustment', component: ThemingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    ThemingComponent,
    LayoutComponent,
    ButtonComponent,
    HomeComponent,
    CardComponent,
    IconComponent,
    VariablesComponent,
    MenuComponent,
    GetStartedComponent,
    LandingComponent,
    ComponentsComponent,
    TabsComponent,
    UtilitiesComponent,
    MarkdownComponent,
    ListComponent,
    CssExamplesComponent,
    TooltipComponent,
    TableComponent,
    InputsComponent,
    ColorDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LayoutModule,
    AutoCompleteModule,
    PanelModule,
    ThemePickerModule,
    MarkdownModule,
    MdcButtonModule,
    MdcRippleModule,
    MdcRadioModule,
    MenuModule,
    TabsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
