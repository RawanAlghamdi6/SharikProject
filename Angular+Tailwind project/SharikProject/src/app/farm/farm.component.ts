import { Component, OnInit } from '@angular/core';
import { farm } from './farm.type';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  
  public myfarms:farm[] = [
    {
    name:'مزرعة بكوخ خارجي و جلسات خارجية',
    location:'الرياض , العمارية',
    unitarea:'3000 م²',
    img:'../../assets/farm1.jpeg',
    phonenumber:'0545480403'},

    {
     name:'مزرعة بمسطحات خضراء و جلسة خارجية',
     location:'الرياض , العمارية',
     unitarea:'  15000 م²',
     img:'../../assets/farm2.jpg',
     phonenumber:'0545480403'},

    {
    name:'مزرعة بملعب طائرة و العاب اطفال',
    location:'الرياض , حي ديراب',
    unitarea:' 5000 م²',
    img:'../../assets/farm3.png',
    phonenumber:'0545480403'},
  ];
  

  isShow: boolean = false;
  name:string='';
  location:string='';
  unitarea:string='';
  img:string='';
  phonenumber:string='';

ngOnInit(): void {
  this.isShow=false;
}

showform(){
  this.isShow=true;
}



addnewfarm(){
  let user = {
    name:this.name,
    location:this.location,
    unitarea:this.unitarea,
    img:this.img,
    phonenumber:this.phonenumber

  }
  this.myfarms.push(user);
  alert('مشاركتك تمت بنجاح ')
  
  
}


imageChanged(event:any){
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file); 
  reader.onload = (_event) => { 
  this.img = reader.result as string;     
 }

  
}

  constructor() { }

 

  

}
