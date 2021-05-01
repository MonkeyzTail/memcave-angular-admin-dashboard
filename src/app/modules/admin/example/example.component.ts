import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialog } from 'app/shared/confirm-dialog/confirm-dialog';
import { CropImageType } from 'app/shared/file-uploader/file-uploader.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls: ["./example.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{

    @ViewChild('fileInput') el: ElementRef;
    imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    public dropdownTypes = CropImageType;

    /**
     * Constructor
     */
    constructor(        
        public dialog: MatDialog,

        )
    {
    }

    openSearchDialog() {
        const dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.afterClosed().subscribe(result => {
          console.log(JSON.stringify(result, null, '\t'));

        });
      }

      onFileUpload(path): void {

        console.log(path, "IMAGE RETURNED");
        
      }
}
