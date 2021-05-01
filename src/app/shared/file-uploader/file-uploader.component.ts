import { HttpClient } from '@angular/common/http';
import {
    ChangeDetectionStrategy,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'environments/environment';
import { base64ToFile } from 'ngx-image-cropper';
import { Observable } from 'rxjs';

export enum CropImageType {
    userCover = 3 / 1,
    sportsCover = 3 / 1,
    collectionCover = 3 / 1,
    profile = 1,
}
@Component({
    selector: 'app-file-uploader',
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileUploaderComponent implements OnInit {
    imageFile: File = null;
    imageBase64File: string = null;
    imageBaseUrl = environment.imageUrl;

    url = `${environment.baseUrl}files`;
    dialogRefCropper: any;

    @ViewChild('content') editModal: TemplateRef<any>; // Note: TemplateRef

    @Input() id;
    @Input() title;
    @Input() source?;
    selectedFile: File = null;
    croppedFile: File = null;
    @Output() onFileSelect = new EventEmitter();
    @Input() type: CropImageType;
    loading = false;
    imageRatio = 1;

    constructor(
        public dialog: MatDialog,
        private httpClient: HttpClient,
        private dialogRef: MatDialogRef<FileUploaderComponent>
    ) {}

    ngOnInit(): void {}

    onFileChange($event: any): void {
        // console.log($event.target.files[0]);
        // console.log(this.selectedFile);
        this.croppedFile = $event;

        this.selectedFile = $event.target.files[0];

        if (this.selectedFile) {
            this.imageRatio = this.type;
            this.dialogRefCropper = this.dialog.open(this.editModal, {
                height: '600px',
                width: '600px',
            });
        }
    }

    close(): void {}

    croppedImage(image: any): void {
        // console.log(image);
        this.imageFile = image.base64;
        this.imageBase64File = image.base64;

        // this.imageFile = image.base64;
    }

    imageLoaded(): void {
        // show cropper
    }

    loadImageFailed(): void {
        // show message
    }

    uploadFile(fileData: any): Observable<any> {
        const formData = new FormData();
        formData.append('file', fileData);
        return this.httpClient.post(`${this.url}/upload`, formData);
    }

    uploadImageToServer(image: any): void {
        this.loading = true;
        this.uploadFile(base64ToFile(this.imageBase64File)).subscribe(
            (res: any) => {
                console.log(res);
                this.onFileSelect.emit(res);
                this.loading = false;
                this.dialogRefCropper.close();
            },
            (error: any) => {
                console.error(error.error.text);
                this.onFileSelect.emit(error.error.text);
                this.loading = false;
                this.dialogRefCropper.close();
            }
        );
    }
}
