import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(private GifsService: GifsService) {}

  search() {
    const valor = this.txtSearch.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    this.GifsService.searchGifs(valor);

    this.txtSearch.nativeElement.value = '';
  }
}
