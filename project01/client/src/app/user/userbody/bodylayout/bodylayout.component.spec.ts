import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodylayoutComponent } from './bodylayout.component';

describe('BodylayoutComponent', () => {
  let component: BodylayoutComponent;
  let fixture: ComponentFixture<BodylayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodylayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodylayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
