import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../Dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { WorkerformService } from '../services/worker-form.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent {

  showErrMsg1 = false;
  showErrMsg2 = false;
  submitted: boolean;
  registerForm: any;
  error = '';
  mname: any;
  amob: any;
  gender: any;
  anumber: any;
  workexperience: any;
   relocate: any;
  hedu: any;
  lname: any;
  mob: any;
  address: any;
  paddress: any;
  dob: any;
  SkillsSet: any;
  Education: any;
  Familycount: any;
  fname: any;
  employed: any;
  dailywaged: any;
  choice=['Yes','No']
  genderVals=['Male','Female','Others'] 
 
 
  statusDialog:any;


  constructor( private  workerFormService: WorkerformService, public matDial: MatDialog) { }

 isNameSelected: boolean;

  selectInput(event) {
    const selected = event.target.value;
    // tslint:disable-next-line: triple-equals
    if (selected == 'No') {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  save() {
    if (this.fname == undefined || this.fname == null || this.fname.length ===0) {
      this.error = '* Please Enter First name!';
    } else if (this.lname == undefined || this.lname == null || this.lname.length ===0 ) {
      this.error = '* Please Enter Last name!';
    } else if (this.mob == undefined || this.mob == null ||  this.mob.length ===0) {
      this.error = '* Please Enter Mobile Number!';
    } else if (this.address == undefined || this.address == null || this.address.length ===0) {
      this.error = '* Please Enter Current Address with pincode!';
    } else if (this.paddress == undefined || this.paddress == null || this.paddress.length ===0) {
      this.error = '* Please Enter Permanent Address with pincode!';
    }  else if (this.anumber == undefined || this.anumber == null || this.anumber.length ===0) {
      this.error = '* Please Enter Adhaar Number to register!';
    } else if (this.dob == undefined || this.dob == null || this.dob.length ===0) {
      this.error = '* Please Enter Date of birth!';
    } else if (this.SkillsSet == undefined || this.SkillsSet == null || this.SkillsSet.length ===0) {
      this.error = '* Please select your Skills Set!';
    } else if (this.workexperience == undefined || this.workexperience == null ||  this.workexperience.length ===0) {
      this.error = '* Please Enter your Work Experience!';
    } else if (this.Education == undefined || this.Education == null || this.Education.length ===0) {
      this.error = '* Please Enter Education Details!';
    } else{
      this.error ="";
      const Data: any = {
        firstName: this.fname,
        middleName: this.mname,
        lastName: this.lname,
        mobNum: this.mob,
        aMobNum: this.amob,
        gender: this.gender,
        adhaar: this.anumber,
        cAddress: this.address,
        pAddress: this.paddress,
        dob: this.dob,
        skillset: this.SkillsSet,
        employed: this.employed,
        highestEducation: this.Education,
        Workexperience: this.workexperience,
        opentoRelocate: this.relocate,
        dailyWagedEmployee: this.dailywaged,
        highestDegree: this.hedu,
        numberOfFamilyMembers: this.Familycount
      };
      console.log(Data);
      this.workerFormService.insertData(Data).subscribe(
        resp => {
         this.statusDialog=resp;
          this.openDialog();
        }
      );
    }


      
  }


  onReset() {
    this.submitted = false;
    this.fname = [];
    this.lname = [];
    this.mname = [];
    this.mob = [];
    this.amob = [];
    this.gender = [];
    this.address = [];
    this.paddress = [];
    this.dob = [];
    this.anumber = [];
    this.SkillsSet = [];
    this.workexperience = [];
    this.relocate = [];
    this.Education = [];
    this.hedu = [];
    this.Familycount = [];
}


openDialog(): void {
  this.matDial.open(DialogComponent, {
    width:'400px',
    data:{        
      statusDialog:this.statusDialog,
      migrate:['/dashboard']
    }      
  });

}

}
