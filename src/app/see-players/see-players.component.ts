import { Component } from '@angular/core';
import { PlayerService } from '../Services/player.service';
import { Player } from '../Models/player';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-see-players',
  templateUrl: './see-players.component.html',
  styleUrls: ['./see-players.component.css']
})

export class SeePlayersComponent {

  playersFromDB: Player[] = [];

  constructor(private playerService: PlayerService){}

  getPlayers(){
    this.playerService.getPlayers().subscribe(result=>
      {
        this.playersFromDB = result;
        console.log(this.playersFromDB);
      });
  }

  calculateAge(year: number){
    return 2023 - year;
  }

  displayedColumns: string[] = ['position', 'name', 'surname', 'year', 'height'];
  dataSource = new MatTableDataSource(this.playersFromDB);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }    

}
