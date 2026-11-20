import { TestBed } from '@angular/core/testing';
import { ControleEditoraService } from './controle-editora.service';

describe('ControleEditoraService', () => {
  let service: ControleEditoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleEditoraService);
  });

  it('deve possuir pelo menos três editoras', () => {
    expect(service.getEditoras().length).toBeGreaterThanOrEqual(3);
  });

  it('deve retornar o nome da editora pelo código', () => {
    const primeira = service.getEditoras()[0];
    expect(service.getNomeEditora(primeira.codEditora)).toBe(primeira.nome);
  });

  it('deve retornar string vazia para código inexistente', () => {
    expect(service.getNomeEditora(9999)).toBe('');
  });
});
