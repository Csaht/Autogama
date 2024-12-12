import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextanimationComponent } from './textanimation.component';

describe('TextanimationComponent', () => {
  let component: TextanimationComponent;
  let fixture: ComponentFixture<TextanimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextanimationComponent]
    });
    fixture = TestBed.createComponent(TextanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
