import { Component } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { ReactionsPage } from '../../pages/reactions/reactions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {
           window.addEventListener("contextmenu", (e) => { e.preventDefault(); });
    }
 
    showReactions(ev){
 
        let reactions = this.popoverCtrl.create(ReactionsPage);
 
        reactions.present({
            ev: ev
        });
 
    }
 
    like(){
        console.log("like");
    }

}
