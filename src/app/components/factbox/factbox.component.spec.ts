import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactboxComponent } from './factbox.component';

describe('FactboxComponent', () => {
  let component: FactboxComponent;
  let fixture: ComponentFixture<FactboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
