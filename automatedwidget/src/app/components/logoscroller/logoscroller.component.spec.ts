import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoscrollerComponent } from './logoscroller.component';

describe('LogoscrollerComponent', () => {
  let component: LogoscrollerComponent;
  let fixture: ComponentFixture<LogoscrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoscrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoscrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
