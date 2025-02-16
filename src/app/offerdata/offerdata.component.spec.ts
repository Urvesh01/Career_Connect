import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferdataComponent } from './offerdata.component';

describe('OfferdataComponent', () => {
  let component: OfferdataComponent;
  let fixture: ComponentFixture<OfferdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferdataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
