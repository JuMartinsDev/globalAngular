import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';
import { ProgramacaoComponent } from './components/programacao/programacao.component';
import { EventoCardComponent } from './components/evento-card/evento-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ParceirosComponent, ProgramacaoComponent, EventoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'globalAngular';
}
