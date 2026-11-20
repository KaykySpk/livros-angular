import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivroListaComponent } from './livro-lista.component';

describe('LivroListaComponent', () => {
  let fixture: ComponentFixture<LivroListaComponent>;
  let component: LivroListaComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivroListaComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LivroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve listar os livros iniciais na tabela', () => {
    const linhas = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(linhas.length).toBe(component.livros.length);
  });

  it('deve exibir o nome da editora e os autores em lista', () => {
    const el: HTMLElement = fixture.nativeElement;
    const primeiro = component.livros[0];
    expect(el.textContent).toContain(component.obterNome(primeiro.codEditora));
    expect(el.querySelectorAll('tbody tr:first-child ul li').length).toBe(primeiro.autores.length);
  });

  it('o botão Excluir deve remover o livro correspondente', () => {
    const el: HTMLElement = fixture.nativeElement;
    const alvo = component.livros[1];
    const botoes = el.querySelectorAll<HTMLButtonElement>('tbody button');
    botoes[1].click();
    fixture.detectChanges();
    expect(component.livros.some(l => l.codigo === alvo.codigo)).toBeFalse();
    expect(el.textContent).not.toContain(alvo.titulo);
  });
});
