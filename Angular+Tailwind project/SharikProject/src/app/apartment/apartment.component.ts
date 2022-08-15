import { Component, OnInit } from '@angular/core';
import { apartment } from './apartment.type';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  public myapartment:apartment[] = [
    {id:'9582',
    name:' استديو انيق و هادئ بدخول ذاتي',
    location:'الرياض , حي الملقا',
    unitarea:'35 م²',
    img:'../../assets/apartment1.jpg',
    phonenumber:'0545480403'},
   
    {id:'9584',
     name:'استديو بسرير ماستر و جلسة جانبية',
     location:'الرياض , حي الازدهار',
     unitarea:'  30 م²',
     img:'../../assets/apartment2.jpeg',
     phonenumber:'0545480403'},

    {id:'9586',
    name:' استديو مميز بدخول ذاتي',
    location:'الرياض , حي الملقا',
    unitarea:' 27 م²',
    img:'../../assets/apartment3.jpeg',
    phonenumber:'0545480403'},
  ];

  isShow: boolean = false;
  id:string='';
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



addnewapartment(){
  let user = {
    id:this.id,
    name:this.name,
    location:this.location,
    unitarea:this.unitarea,
    img:this.img,
    phonenumber:this.phonenumber

  }
  this.myapartment.push(user);
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


}
