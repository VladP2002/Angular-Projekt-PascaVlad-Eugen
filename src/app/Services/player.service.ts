import { Injectable } from '@angular/core'
import { collection, collectionData, Firestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Player } from '../Models/player';
import { addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private fs: Firestore) { }

  getPlayers():Observable <Player[]>{
      const myCollection: any = collection(this.fs, 'Players');
      return collectionData(myCollection);
  }

  addPlayer(player: Player){
    const myCollection = collection(this.fs,'Players')
    addDoc(myCollection,player);
  }

}
