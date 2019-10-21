import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexHideComponent } from './flex-hide.component';

describe('FlexHideComponent', () => {
  let component: FlexHideComponent;
  let fixture: ComponentFixture<FlexHideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexHideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
