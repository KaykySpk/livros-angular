import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({ providedIn: 'root' })
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java',
      resumo: 'Uma abordagem visual e prática para aprender Java.',
      autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar',
      resumo: 'Introdução completa à programação em Java.',
      autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Core Java for the Impatient',
      resumo: 'Guia direto ao ponto sobre Java moderno.',
      autores: ['Cay Horstmann'] },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maior = this.livros.reduce((max, l) => Math.max(max, l.codigo), 0);
    livro.codigo = maior + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
