import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierFinancialComponenteya } from './supplier-financial.component';

describe('SupplierFinancialComponenteya', () => {
  let component: SupplierFinancialComponenteya;
  let fixture: ComponentFixture<SupplierFinancialComponenteya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierFinancialComponenteya ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierFinancialComponenteya);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
