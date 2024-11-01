import { Component } from '@angular/core';

interface Tarefa {
  nome: string;
  completa: boolean;
}

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: Tarefa[] = [];
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push({ nome: this.novaTarefa.trim(), completa: false });
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }

  tarefaCompleta(index: number) {
    this.tarefas[index].completa = !this.tarefas[index].completa;
  }
}
