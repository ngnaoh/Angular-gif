import { Component, Input } from '@angular/core';
import { Gif } from '../gifs';
import { GifsService } from '../../services/gifs.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
})
export class GifCardComponent {
  private pipe = new DatePipe('en-US');
  @Input({ required: true }) gif!: Gif;

  isOpen = false;
  viewCount = 0;
  copyStatus = 0;
  onHover = false;
  constructor(private gifsService: GifsService) {}

  toggle(id: string) {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.gifsService.countView(id).subscribe((resp) => {
        this.viewCount = resp.viewCount;
      });
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.gif.url);
    this.copyStatus = 1;
    setTimeout(() => {
      this.copyStatus = 0;
    }, 1000);
  }

  hover() {
    this.onHover = true;
  }

  leave() {
    this.onHover = false;
  }
}
