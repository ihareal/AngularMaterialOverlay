import { Component, OnInit } from '@angular/core';
import { FilePreviewOverlayService } from './file-preview-overlay.service';

import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

@Component({
  selector: 'app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.css']
})
export class AppStartPageComponent {

  constructor(private previewDialog: FilePreviewOverlayService) { }

  showPreview() {
    const dialogRef: FilePreviewOverlayRef = this.previewDialog.open();
  }
}

