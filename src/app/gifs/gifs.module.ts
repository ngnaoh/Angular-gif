import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifListComponent } from './gif-list/gif-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GifCardComponent } from './gif-card/gif-card.component';
import { NgxFilesizeModule } from 'ngx-filesize';

@NgModule({
  declarations: [
    GifsPageComponent,
    GifListComponent,
    SearchBarComponent,
    GifCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InfiniteScrollModule,
    NgxFilesizeModule,
  ],
  exports: [GifsPageComponent],
})
export class GifsModule {}
