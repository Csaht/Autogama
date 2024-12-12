import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCarosulbootstrapComponent } from './test-carosulbootstrap.component';

describe('TestCarosulbootstrapComponent', () => {
  let component: TestCarosulbootstrapComponent;
  let fixture: ComponentFixture<TestCarosulbootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCarosulbootstrapComponent]
    });
    fixture = TestBed.createComponent(TestCarosulbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
