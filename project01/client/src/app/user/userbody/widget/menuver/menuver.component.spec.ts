import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuverComponent } from './menuver.component';

describe('MenuverComponent', () => {
  let component: MenuverComponent;
  let fixture: ComponentFixture<MenuverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
