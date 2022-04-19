import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-badge',
  templateUrl: './avatar-badge.component.html',
  styleUrls: ['./avatar-badge.component.scss'],
})
export class AvatarBadgeComponent {
  @Input() imageUrl?: string = 'http://35.172.33.77:5000/general/images/7WYKvQ2qEu0KQ3yU.png';
  @Input() name: string;
  @Input() caption?: string;
  @Input() shape?: string;
  @Input() avatar?: boolean;
}
