import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  statusDialog: string;
  migrate:any;
  migrateReload:boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router:Router) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  confirm():void{

    if(this.data.migrateReload){
      this.router.navigate(this.data.migrate).then(() => {
        window.location.reload();
      });
    }else{
      this.router.navigate(this.data.migrate);
    }

    this.dialogRef.close();
  }

}
