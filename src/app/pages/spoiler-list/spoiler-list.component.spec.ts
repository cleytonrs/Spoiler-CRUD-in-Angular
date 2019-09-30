import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerListComponent } from './spoiler-list.component';

describe('SpoilerListComponent', () => {
  let component: SpoilerListComponent;
  let fixture: ComponentFixture<SpoilerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoilerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
