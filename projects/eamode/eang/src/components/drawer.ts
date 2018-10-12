import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  TemplateRef,
  ContentChild,
  ViewChild,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators'

@Component({
  selector: 'ea-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-content select="header"></ng-content>
  <ng-content select="section"></ng-content>
  <ng-content select="footer"></ng-content>
  <ng-content></ng-content>
  `,
  styles: []
})
export class Drawer implements OnInit, OnDestroy {
  @Input() suggestions: Observable<any>
  @Input() enabled

  @Output() readonly searchTerm = new EventEmitter<string>()
  @Output() selectedItem

  @ViewChild('inputField') inputField
  @ViewChild('suggestionPanel') suggestionPanel
  @ContentChild(TemplateRef) resultsTemplate: TemplateRef<any>

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
