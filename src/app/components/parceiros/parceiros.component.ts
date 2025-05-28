import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './parceiros.component.html',
  styleUrl: './parceiros.component.css'
})
export class ParceirosComponent {
logoIBM: string = '/assets/ibm-logo-1956.webp';
altIBM: string = 'Logo da IBM - Parceira do Global Solution';

logoGoogle: string = '/assets/g.jpg';
altGoogle: string = 'Logo do Google - Parceiro Global Solution';

logoMicrosoft: string = '/assets/microsoft.webp';
altMicrosoft: string = 'Logo da Microsoft - Parceira do Global Solution';
}
