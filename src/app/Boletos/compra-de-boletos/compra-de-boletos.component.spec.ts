import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDeBoletosComponent } from './compra-de-boletos.component';

describe('CompraDeBoletosComponent', () => {
  let component: CompraDeBoletosComponent;
  let fixture: ComponentFixture<CompraDeBoletosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraDeBoletosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraDeBoletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
