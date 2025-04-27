import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesProdutComponent } from './detalhes-produt.component';

describe('DetalhesProdutComponent', () => {
  let component: DetalhesProdutComponent;
  let fixture: ComponentFixture<DetalhesProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalhesProdutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
