import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpoilerComponent } from './edit-spoiler.component';

describe('EditSpoilerComponent', () => {
  let component: EditSpoilerComponent;
  let fixture: ComponentFixture<EditSpoilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpoilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
