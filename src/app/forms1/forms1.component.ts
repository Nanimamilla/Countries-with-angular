import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.scss']
})
export class Forms1Component implements OnInit {

  public form1: FormGroup;
//  public  firstName:string;
//  public  lastName:string;

constructor() { }

ngOnInit(): void {
  this.form1=new FormGroup(
    {
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('default data remove it',Validators.required)
    }
  )
  console.log("intallY",this.form1);
}
showData()
{
  console.log(this.form1);
}

}
