import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { cars } from './cars.type';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


public mycars:cars[] = [
    {id:'9582',
    year:'2008',
    make:'Buick',
    model:'Enclave',
    type:'SUV',
    img:'../../assets/buick.jpg',
    phonenumber:'0545480403'},

    {id:'9584',
     year:'2019',
     make:'Volvo',
     model:'XC90',
     type:'SUV',
     img:'../../assets/volvo.jpg',
     phonenumber:'0545480403'},

    {id:'9586',
    year:'2020',
    make:'Volvo',
    model:'XC60',
    type:'SUV',
    img:'../../assets/volvx.jpg',
    phonenumber:'0545480403'},

    {id:'9588',
    year:'2016',
    make:'GMC',
    model:'Sierra 1500 Crew Cab',
    type:'Pickup',
    img:'../../assets/gmc.jpg',
    phonenumber:'0545480403'},

    {id:'9080',
    year:'2020',
    make:'Motorcycle',
    model:'Sierra 1500 Crew Cab',
    type:'Pickup',
    img:'../../assets/soz.jpg',
    phonenumber:'0545480403'},

    {id:'0710',
    year:'2022',
    make:'scooter',
    model:'Sierra 1500 Crew Cab',
    type:'Pickup',
    img:'../../assets/Scooter.jpg',
    phonenumber:'0545480403'},
];

    isShow: boolean = false;
    id:string='';
    year:string='';
    make:string='';
    model:string='';
    type:string='';
    img:string='';
    phonenumber:string='';

  ngOnInit(): void {
    this.isShow=false;
  }

  showform(){
    this.isShow=true;
  }



  addnewcar(){
    let user = {
      id:this.id,
      year:this.year,
      make:this.make,
      model:this.model,
      type:this.type,
      img:this.img,
      phonenumber:this.phonenumber

    }
    this.mycars.push(user);
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
