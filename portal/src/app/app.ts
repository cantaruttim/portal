import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  email: string = '';
  senha: string = '';
  lembrar: boolean = false;

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    console.log('Lembrar-me:', this.lembrar);
  }
}
