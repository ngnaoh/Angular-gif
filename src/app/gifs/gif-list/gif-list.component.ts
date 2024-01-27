import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-gif-list',
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  get gifs() {
    return this.gifsService.gifs;
  }

  constructor(private gifsService: GifsService) {
    this.gifsService.trending();
  }

  onModalScrollDown() {
    this.gifsService.loadMore();
  }
}
