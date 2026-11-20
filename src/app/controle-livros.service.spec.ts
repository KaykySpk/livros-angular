import { TestBed } from '@angular/core/testing';
import { ControleLivrosService } from './controle-livros.service';
import { Livro } from './livro';

describe('ControleLivrosService', () => {
  let service: ControleLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleLivrosService);
  });

  it('deve iniciar com pelo menos três livros', () => {
    expect(service.obterLivros().length).toBeGreaterThanOrEqual(3);
  });

  it('incluir deve atribuir o maior código existente + 1', () => {
    const maior = Math.max(...service.obterLivros().map(l => l.codigo));
    const novo = new Livro();
    novo.titulo = 'Novo';
    service.incluir(novo);
    expect(novo.codigo).toBe(maior + 1);
    expect(service.obterLivros()).toContain(novo);
  });

  it('excluir deve remover somente o livro com o código informado', () => {
    const antes = service.obterLivros().length;
    const alvo = service.obterLivros()[1].codigo;
    service.excluir(alvo);
    const depois = service.obterLivros();
    expect(depois.length).toBe(antes - 1);
    expect(depois.some(l => l.codigo === alvo)).toBeFalse();
  });

  it('excluir com código inexistente não deve alterar a lista', () => {
    const antes = service.obterLivros().length;
    service.excluir(9999);
    expect(service.obterLivros().length).toBe(antes);
  });
});
