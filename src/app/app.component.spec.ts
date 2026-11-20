import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  it('deve criar o componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('deve exibir os links Lista e Cadastro', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const texto: string = fixture.nativeElement.textContent;
    expect(texto).toContain('Lista de Livros');
    expect(texto).toContain('Cadastro de Livros');
  });
});
