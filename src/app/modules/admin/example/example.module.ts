import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { ConfirmDialog } from 'app/shared/confirm-dialog/confirm-dialog';
import { FileUploaderModule } from 'app/shared/file-uploader/file-uploader.module';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        ConfirmDialog

    ],
    imports     : [
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        FileUploaderModule,
        RouterModule.forChild(exampleRoutes)
    ],
    providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
     ],
})
export class ExampleModule
{
}
