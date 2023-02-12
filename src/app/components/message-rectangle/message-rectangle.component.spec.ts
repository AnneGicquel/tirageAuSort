import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRectangleComponent } from './message-rectangle.component';

describe('MessageRectangleComponent', () => {
  let component: MessageRectangleComponent;
  let fixture: ComponentFixture<MessageRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageRectangleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
