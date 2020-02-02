import { AppModule } from './../../app.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Spoiler } from '../../interfaces/spoiler';
import { SpoilerService } from '../../services/spoiler.service';
import { ErrorMsgComponent } from '../../shared/error-msg/error-msg.component';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-spoiler-list',
  templateUrl: './spoiler-list.component.html',
  styleUrls: ['./spoiler-list.component.css']
})

export class SpoilerListComponent implements OnInit {

  public spoiler: Spoiler[];
  
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;

  constructor(private spoilerService: SpoilerService) { }

  ngOnInit() {
    this.getSpoilerList();
  }

  getSpoilerList() {
    this.spoilerService.getSpoilerList()
      .subscribe((spoiler: Spoiler[]) => {
        this.spoiler = spoiler;
      }, () => { this.errorMsgComponent.setError('Failed to find spoilers.'); });
  }

  deleteSpoiler(id: number) {
    this.spoilerService.deleteSpoiler(id)
      .subscribe(() => {
        this.getSpoilerList();
      }, () => { this.errorMsgComponent.setError('Failed to delete spoilers.'); });
  }

  haveSpoiler(): boolean {  
    return this.spoiler && this.spoiler.length > 0;
  }

}
