import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  myClass: string ="";
  isTapped:boolean=false;
  image:string="menu";
  title = 'portofolio';

  loadScript(url:any) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  ngOnInit(){
    this.loadScript('../assets/js/particles.min.js');
    this.loadScript('../assets/js/app.js');
  }

  constructor() { 
    
  }

  load(){
    this.loadScript('../assets/js/particles.min.js');
    this.loadScript('../assets/js/app.js');
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
