import { Component, OnInit } from '@angular/core';
import { session } from './session.type';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  public mysession:session[] = [
    {name:'جلسات العلا ',
    location:'العلا',
    img:'../../assets/ULA1.jpg',
    phonenumber:'0545480403'},

    {name:'جلسات العمارية',
     location:'الرياض , العمارية',
     img:'../../assets/sisson2.jpg',
     phonenumber:'0545480403'},

    {name:'جلسات العمارية',
    location:'الرياض , العمارية ',
    img:'../../assets/psission.jpeg',
    phonenumber:'0545480403'},
  ];

  isShow: boolean = false;
  name:string='';
  location:string='';
  img:string='';
  phonenumber:string='';

ngOnInit(): void {
  this.isShow=false;
}

showform(){
  this.isShow=true;
}



addnewsession(){
  let user = {
    name:this.name,
    location:this.location,
    img:this.img,
    phonenumber:this.phonenumber,

  }
  this.mysession.push(user);
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
