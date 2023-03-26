import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate first pages buttons', () => {
    fixture.componentRef.setInput('totalPages', 9);
    fixture.componentRef.setInput('currentPage', 1);
    fixture.componentRef.setInput('pagesAround', 2);
    fixture.detectChanges();

    const aElements = fixture.nativeElement.querySelectorAll('a');

    expect(aElements.length).toBe(3);
    expect(component.pages).toEqual([1, 2, 3]);
  });

  it('should calculate middle pages buttons', () => {
    fixture.componentRef.setInput('totalPages', 9);
    fixture.componentRef.setInput('currentPage', 4);
    fixture.componentRef.setInput('pagesAround', 2);
    fixture.detectChanges();

    const aElements = fixture.nativeElement.querySelectorAll('a');

    expect(aElements.length).toBe(5);
    expect(component.pages).toEqual([2, 3, 4, 5, 6]);
  });
});
