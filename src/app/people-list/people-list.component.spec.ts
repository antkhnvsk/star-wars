import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PeopleState, peopleViewSelector } from '../store';

import { PeopleListComponent } from './people-list.component';
const state: PeopleState = {
  data: {
    message: '',
    total_pages: 9,
    results: [
      { name: 'Anakin Skywalker', uid: '', url: '' },
      { name: 'Chewbacca', uid: '', url: '' },
    ],
    total_records: 92,
    previous: '',
    next: '',
  },
  loadedPage: 1,
};
describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleListComponent, RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            people: state,
            router: { state: { root: { params: { peoplePage: 1 } } } },
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have people results', () => {
    const aElements = fixture.nativeElement.querySelectorAll('a.link');

    expect(aElements.length).toBe(2);
  });
});
