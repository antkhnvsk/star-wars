import { JsonPipe, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RequestResults } from '../models';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterLink, NgFor, RouterLinkActive],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() results!: RequestResults<unknown>;
  @Input() currentPage!: number;
  @Input() pagesAround = 2;

  pages!: number[];

  ngOnChanges() {
    this.calculatePagination();
  }

  private calculatePagination() {
    const allPages = Array(this.results.total_pages)
      .fill(null)
      .map((_, i) => i + 1);

    const currentPageIndex = allPages.indexOf(this.currentPage);

    const sliceFrom = Math.max(0, currentPageIndex - this.pagesAround);
    const sliceTo = currentPageIndex + 1 + this.pagesAround;

    this.pages = allPages.slice(sliceFrom, sliceTo);
  }
}
