import { Spoiler } from './../../interfaces/spoiler';
import { Router } from '@angular/router';
import { SpoilerService } from './../../services/spoiler.service';
import { ErrorMsgComponent } from './../../shared/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-spoiler',
  templateUrl: './create-spoiler.component.html',
  styleUrls: ['./create-spoiler.component.css']
})
export class CreateSpoilerComponent {

  @ViewChild(ErrorMsgComponent,{ read: true, static: false }) errorMsgComponent: ErrorMsgComponent;

  constructor(private SpoilerService: SpoilerService, private router: Router) { }

  addSpoiler(spoiler: Spoiler){
    this.SpoilerService.addSpoiler(spoiler)
      .subscribe(
        () => { this.router.navigateByUrl('/');},
        () => { this.errorMsgComponent.setError("Failed to add spoiler."); }
      )
  }

}
