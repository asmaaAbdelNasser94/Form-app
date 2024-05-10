import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrl: './user-info-modal.component.scss'
})
export class UserInfoModalComponent {
  @Input() userInfo!: User;
}
