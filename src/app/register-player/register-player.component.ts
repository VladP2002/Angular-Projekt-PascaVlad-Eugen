import { Component } from '@angular/core';
import { PlayerService } from '../Services/player.service';
import { Player } from '../Models/player';

// interface Position{
//   code: string;
//   name: string;
// }

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent {
  inputValue: string = '';
  newPlayerName: string = '';
  newPlayerSurname: string = '';
  newPlayerBirthYear: number = 0;
  newPlayerHeight: number = 0;
  newPlayerPosition: string = '';

  constructor(private playerService: PlayerService){}

  // positions: Position[] = [
  //   {
  //     code: "GK", name: "GK-Goalkeeper"
  //   }
  // ];

  addPlayer(){
    let newPlayer = {
      Name: this.newPlayerName,
      Surname: this.newPlayerSurname,
      BirthYear: this.newPlayerBirthYear,
      Height: this.newPlayerHeight,
      Position: this.newPlayerPosition
    }
    this.playerService.addPlayer(newPlayer);
  }
}
