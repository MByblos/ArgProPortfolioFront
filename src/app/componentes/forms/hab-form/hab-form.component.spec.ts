import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabFormComponent } from './hab-form.component';

describe('HabFormComponent', () => {
  let component: HabFormComponent;
  let fixture: ComponentFixture<HabFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
