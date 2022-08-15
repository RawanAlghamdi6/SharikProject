import { Component, OnInit } from '@angular/core';
import { dress } from './dress.type';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  public mydress:dress[] = [
    {size:' s',
    location:'الرياض , حي الازدهار',
    img:'../../assets/white.webp',
    phonenumber:'0545480403',
    price:'3000'},

    {size:' xs',
    location:'الرياض , حي الملقا',
    img:'../../assets/multi.jpg',
    phonenumber:'0545480403',
    price:'1000'},

    {size:' s',
    location:'الرياض , حي الازدهار',
    img:'../../assets/blue.jpg',
    phonenumber:'0545480403',
    price:'900'},
  ];


  isShow: boolean = false;
  size:string='';
  location:string='';
  img:string='';
  phonenumber:string='';
  price:string='';

ngOnInit(): void {
  this.isShow=false;
}

showform(){
  this.isShow=true;
}



addnewadress(){
  let user = {
    size:this.size,
    location:this.location,
    img:this.img,
    phonenumber:this.phonenumber,
    price:this.price

  }
  this.mydress.push(user);
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
