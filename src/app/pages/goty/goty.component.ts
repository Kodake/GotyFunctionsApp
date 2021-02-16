import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getJuegos();
  }

  getJuegos() {
    this.gameService.getJuegos().subscribe(data => {
      this.juegos = data;
    });
  }

  votar(juego: Game) {
    this.gameService.votar(juego.id).subscribe((resp: { ok: boolean, message: string }) => {
      if (resp.ok) {
        Swal.fire('Gracias', resp.message, 'success');
      } else {
        Swal.fire('Oops...', resp.message, 'error');
      }
    });
  }
}
