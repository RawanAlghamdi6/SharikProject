import { Component, OnInit } from '@angular/core';
import { camp } from './camp.type';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  public mycamp:camp[] = [
    {
    name:'مخيم ببيت شعر و جلسة خارجية',
    location:'الرياض , حي الخير',
    unitarea:'20000 م²',
    img:'../../assets/camp1.jpeg',
    phonenumber:'0545480403'},

    {
     name:'مخيم بجلسة خارجية و ركن شواء ',
     location:'الرياض , حي الخير',
     unitarea:'  20000 م²',
     img:'../../assets/camp2.jpeg',
     phonenumber:'0545480403'},

    {
    name:'مخيم بجلسة خارجية و بيت شعر',
    location:'الرياض , حي الثمامة',
    unitarea:'  2000 م²',
    img:'../../assets/camp3.png',
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



addnewcamp(){
  let user = {
    name:this.name,
    location:this.location,
    unitarea:this.unitarea,
    img:this.img,
    phonenumber:this.phonenumber

  }
  this.mycamp.push(user);
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
