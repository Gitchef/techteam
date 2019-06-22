import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePComponent } from './type-p.component';

describe('TypePComponent', () => {
  let component: TypePComponent;
  let fixture: ComponentFixture<TypePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
