import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-image',
  templateUrl: './status-image.component.html',
  styleUrls: ['./status-image.component.scss']
})
export class StatusImageComponent {
  @Input() imagesrc?: string;
  @Input() name?: string;
}
