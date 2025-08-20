import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelToCsvComponent } from './excel-to-csv.component';

describe('ExcelToCsvComponent', () => {
  let component: ExcelToCsvComponent;
  let fixture: ComponentFixture<ExcelToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcelToCsvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
