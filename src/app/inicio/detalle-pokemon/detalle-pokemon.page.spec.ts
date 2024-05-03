import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePokemonPage } from './detalle-pokemon.page';

describe('DetallePokemonPage', () => {
  let component: DetallePokemonPage;
  let fixture: ComponentFixture<DetallePokemonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
