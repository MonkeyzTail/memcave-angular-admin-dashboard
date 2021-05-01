import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ImageCropperModule } from "ngx-image-cropper";
import { FileUploaderComponent } from "./file-uploader.component";


@NgModule({
  declarations: [
    FileUploaderComponent
  ],

  imports: [
    CommonModule,
    ImageCropperModule,
  ],
  exports: [
    FileUploaderComponent
  ],
  providers: []
})
export class FileUploaderModule { }
