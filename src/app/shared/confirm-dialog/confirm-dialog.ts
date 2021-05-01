import { ChangeDetectionStrategy, ElementRef, ViewChild } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FuseAnimations } from "@fuse/animations";

@Component({
    selector       : 'confirm-dialog',
    templateUrl    : './confirm-dialog.html',
    styleUrls:     ['./confirm-dialog.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : FuseAnimations
})
export class ConfirmDialog {

    constructor(
        private dialogRef: MatDialogRef<ConfirmDialog>
      ) {}
      saveClicked() {
        this.dialogRef.close({name:"ss"});

      }
}
