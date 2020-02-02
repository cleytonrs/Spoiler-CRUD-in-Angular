import { ActivatedRoute, Router } from '@angular/router';
import { Spoiler } from './../../interfaces/spoiler';
import { SpoilerService } from './../../services/spoiler.service';
import { ErrorMsgComponent } from './../../shared/error-msg/error-msg.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-spoiler',
  templateUrl: './edit-spoiler.component.html',
  styleUrls: ['./edit-spoiler.component.css']
})
export class EditSpoilerComponent {
  public spoiler: Spoiler;
  @ViewChild(ErrorMsgComponent,{ read: true, static: false }) errorMsgComponent: ErrorMsgComponent;


  constructor(private spoilerService: SpoilerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { 
      this.getSpoiler(this.activatedRoute.snapshot.params.id);
    }

    getSpoiler(id: number) {
      this.spoilerService.getSpoiler(id)
        .subscribe((spoiler: Spoiler) => {
          this.spoiler = spoiler;
        }, () => { this.errorMsgComponent.setError('Failed to fetch spoiler.')})
    }

    updateSpoiler(spoiler: Spoiler) {
      this.spoilerService.updateSpoiler(spoiler)
        .subscribe(
          () => { this.router.navigateByUrl('/'); },
          () => { this.errorMsgComponent.setError('Failed to update spoiler.'); });
    }

}
