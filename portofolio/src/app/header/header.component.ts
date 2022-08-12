import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@HostBinding('class.mobile-menu') menuOpened = false;
  myClass: string ="";
  isTapped:boolean=false;
  image:string="menu";
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isTapped = !this.isTapped;
    if(this.isTapped==true){
      this.myClass = "mobile-menu";
      this.image="close";
    }else{
      this.myClass="";
      this.image="menu";
    }
  }
 


}
