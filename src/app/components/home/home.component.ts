import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  titulo: string = 'Global Solution';
  descricao: string = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento: string = '26 de maio';
  isEventoAtivo: boolean = true; // Condição para exibir ou ocultar o evento
  destaques: string[] = ['Inovação', 'Tecnologia', 'Impacto Social']; // Lista de destaques
}
