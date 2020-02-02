import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpoilerComponent } from './create-spoiler.component';

describe('CreateSpoilerComponent', () => {
  let component: CreateSpoilerComponent;
  let fixture: ComponentFixture<CreateSpoilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpoilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
