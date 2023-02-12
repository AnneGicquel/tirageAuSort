import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsentListByGenderComponent } from './absent-list-by-gender.component';

describe('AbsentListByGenderComponent', () => {
  let component: AbsentListByGenderComponent;
  let fixture: ComponentFixture<AbsentListByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsentListByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsentListByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
