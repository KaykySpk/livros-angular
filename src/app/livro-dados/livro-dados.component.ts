import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    // Garantia extra: a editora escolhida precisa existir.
    if (!this.editoras.some(e => e.codEditora === this.livro.codEditora)) {
      return;
    }
    this.livro.autores = this.autoresForm
      .split('\n')
      .map(a => a.trim())
      .filter(a => a.length > 0);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
