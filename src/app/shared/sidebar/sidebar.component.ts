import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private GifsService: GifsService) {}

  get history() {
    return this.GifsService.history;
  }

  search(args: string) {
    this.GifsService.searchGifs(args);
  }

  trending() {
    this.GifsService.trending();
  }
}
