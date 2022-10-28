import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencialaboralComponent } from './experiencialaboral.component';

describe('ExperiencialaboralComponent', () => {
  let component: ExperiencialaboralComponent;
  let fixture: ComponentFixture<ExperiencialaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencialaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencialaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
