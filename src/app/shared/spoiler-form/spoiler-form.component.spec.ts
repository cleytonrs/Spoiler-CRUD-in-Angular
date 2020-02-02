import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilerFormComponent } from './spoiler-form.component';

describe('SpoilerFormComponent', () => {
  let component: SpoilerFormComponent;
  let fixture: ComponentFixture<SpoilerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpoilerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
