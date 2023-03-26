import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { breadCrumbsSelector } from '../store';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink, NgTemplateOutlet],
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  breadcrumbs$ = this.store.select(breadCrumbsSelector);

  constructor(private store: Store) {}
}
