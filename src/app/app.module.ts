import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppTabeComponent } from './app-tabe/app-tabe.component';
import { MatTableModule } from '@angular/material/table';
import { AppStartPageComponent } from './app-start-page/app-start-page.component';
import { FilePreviewOverlayService } from './app-start-page/file-preview-overlay.service';

@NgModule({
  declarations: [
    AppComponent,
    AppTabeComponent,
    AppStartPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    OverlayModule
  ],
  providers: [FilePreviewOverlayService],
  entryComponents: [AppTabeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
