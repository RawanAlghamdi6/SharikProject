import { Component, OnInit,  } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  form:FormGroup=new FormGroup({})


  constructor(private bulid:FormBuilder) { }

   ngOnInit() { 

      this.form=this.bulid.group({
      name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      birthday:new FormControl('',[Validators.required]),
      Agreement:new FormControl('',[Validators.required,Validators.requiredTrue])

    });
  }

onSubmit () {
  if(!this.form.valid) {
    this.form.markAllAsTouched();
    return
   }
   alert('تم انضمامك بنجاح ! ');
   this.form.reset();
}
}


