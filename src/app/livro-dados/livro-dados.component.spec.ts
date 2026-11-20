import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LivroDadosComponent } from './livro-dados.component';
import { ControleLivrosService } from '../controle-livros.service';

describe('LivroDadosComponent', () => {
  let fixture: ComponentFixture<LivroDadosComponent>;
  let component: LivroDadosComponent;
  let router: Router;
  let livros: ControleLivrosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LivroDadosComponent],
      imports: [FormsModule, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LivroDadosComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    livros = TestBed.inject(ControleLivrosService);
    fixture.detectChanges();
  });

  it('deve carregar as editoras no select', () => {
    const opcoes = fixture.nativeElement.querySelectorAll('select option');
    // uma opção de placeholder + uma por editora
    expect(opcoes.length).toBe(component.editoras.length + 1);
  });

  it('incluir deve separar autores por quebra de linha, cadastrar e navegar para /lista', () => {
    const navegar = spyOn(router, 'navigateByUrl').and.resolveTo(true);
    const antes = livros.obterLivros().length;
    component.livro.titulo = 'Teste';
    component.livro.codEditora = component.editoras[0].codEditora;
    component.autoresForm = 'Autor A\nAutor B';
    component.incluir();
    expect(livros.obterLivros().length).toBe(antes + 1);
    const novo = livros.obterLivros()[antes];
    expect(novo.autores).toEqual(['Autor A', 'Autor B']);
    expect(navegar).toHaveBeenCalledWith('/lista');
  });

  it('não deve cadastrar sem editora selecionada', () => {
    const navegar = spyOn(router, 'navigateByUrl').and.resolveTo(true);
    const antes = livros.obterLivros().length;
    component.livro.titulo = 'Sem editora';
    component.incluir();
    expect(livros.obterLivros().length).toBe(antes);
    expect(navegar).not.toHaveBeenCalled();
  });
});
