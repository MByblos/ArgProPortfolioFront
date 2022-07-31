import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyFormComponent } from './proy-form.component';

describe('ProyFormComponent', () => {
  let component: ProyFormComponent;
  let fixture: ComponentFixture<ProyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
