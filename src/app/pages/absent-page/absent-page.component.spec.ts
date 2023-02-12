import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentPageComponent } from './absent-page.component';

describe('AbsentPageComponent', () => {
  let component: AbsentPageComponent;
  let fixture: ComponentFixture<AbsentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
