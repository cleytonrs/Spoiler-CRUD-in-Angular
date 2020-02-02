import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Spoiler } from '../../interfaces/spoiler';

@Component({
  selector: 'app-spoiler-form',
  templateUrl: './spoiler-form.component.html',
  styleUrls: ['./spoiler-form.component.css']
})
export class SpoilerFormComponent {
  @Input() spoiler: Spoiler = <Spoiler>{};
  @Output() outputSpoiler: EventEmitter<Spoiler> = new EventEmitter();
  
  onSubmit() {
    this.outputSpoiler.emit(this.spoiler);
  }

}
