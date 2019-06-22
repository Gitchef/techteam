import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePComponent } from './stage-p.component';

describe('StagePComponent', () => {
  let component: StagePComponent;
  let fixture: ComponentFixture<StagePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
