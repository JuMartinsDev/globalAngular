import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './evento-card.component.html',
  styleUrl: './evento-card.component.css'
})

export class EventoCardComponent {
  // Recebendo as propriedades via @Input()
  @Input() titulo: string = 'Kick-off';
  @Input() data: string = '26 de maio';
  @Input() horario: string = '19H00';
  @Input() local: string = 'ONLINE';
}
