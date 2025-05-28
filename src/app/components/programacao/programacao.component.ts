import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './programacao.component.html',
  styleUrls: ['./programacao.component.css']
})

export class ProgramacaoComponent {
  // Lista de eventos com tipagem Evento
  eventos: Evento[] = [
    {
      id: 1,
      titulo: 'Global Solution 2025',
      data: '2025-10-10',
      horario: '09:00',
      local: 'Centro de Convenções',
      mensagemInscricao: null  // Iniciando sem mensagem
    },
    {
      id: 2,
      titulo: 'Tech Summit 2025',
      data: '2025-11-15',
      horario: '14:00',
      local: 'Arena Expo',
      mensagemInscricao: null  // Iniciando sem mensagem
    }
  ];

  //Função chamada ao clicar no botão Participar
  participarEvento(evento: Evento) {
    evento.mensagemInscricao = `Você se inscreveu no evento: ${evento.titulo} que acontecerá no dia ${evento.data} às ${evento.horario} no local: ${evento.local}.`;
  }
}

//Definindo a interface Evento dentro do arquivo do componente
interface Evento {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  mensagemInscricao: string | null;
}
