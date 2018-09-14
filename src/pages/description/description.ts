import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
  providers: [MovieProvider]
})
export class DescriptionPage {
  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public movieProvider: MovieProvider
    ) {
  }

  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDescription(this.filmeid).subscribe(data=>{
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);
        console.log(this.filme);
    }, error => {
        console.log(error);
        
    })
  }

}
