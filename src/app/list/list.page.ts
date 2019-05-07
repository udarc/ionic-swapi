import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';
import { constants } from 'http2';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  // public items: Array<{ title: string; note: string; icon: string }> = [];
  public items : string[] = [];
  constructor(private fooSvc:SharedDataService,private swapiSvc: SwapiService) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  //recursive function
  private foo(stop : boolean =false){
    console.log("foo");
    if(!stop) {
      this.foo(new Date().getSeconds() > 10 ? true : false);
    }
    
  }

  ngOnInit() {
   // this.foo();
    this.swapiSvc.getPlanets().subscribe(
      data =>{
        console.log(data);
        this.items = [
          ...this.items
          ,...(<any> data).results.map(x=>x.name)
        ].sort();
      }
      , error=>{
      console.log(error);
      }
      
    )
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
