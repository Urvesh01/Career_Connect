import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAnalysComponent } from './salary-analys.component';

describe('SalaryAnalysComponent', () => {
  let component: SalaryAnalysComponent;
  let fixture: ComponentFixture<SalaryAnalysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryAnalysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAnalysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
