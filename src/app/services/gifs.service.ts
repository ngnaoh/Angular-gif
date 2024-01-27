import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse, ViewCountGifResponse } from '../gifs/gifs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'qK53Oik8AGX1ZYI4NikKHflTe01l1wbc';
  private url: string = 'https://api.giphy.com/v1/gifs';
  private _limit = 12;
  private _offset = 0;
  private _q = '';
  private _history: string[] = [];

  public gifs: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('HISTORY')!) || [];
  }

  private get getQuery() {
    if (this._q == '') {
      return new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', this._limit)
        .set('offset', this._offset);
    } else {
      return new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', this._limit)
        .set('offset', this._offset)
        .set('q', this._q);
    }
  }

  trending() {
    this.gifs = [];
    const params = this.getQuery;
    this.http
      .get<SearchGifsResponse>(`${this.url}/trending`, { params })
      .subscribe((resp) => {
        this.gifs = resp.data;
      });
  }

  searchGifs(query: string) {
    this.gifs = [];
    query = query.trim().toLowerCase();
    this._q = query;
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('HISTORY', JSON.stringify(this._history));
    }

    const params = this.getQuery;

    this.http
      .get<SearchGifsResponse>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        this.gifs = resp.data;
      });
  }

  loadMore() {
    this._offset += this._limit;
    const params = this.getQuery;
    if (this._q === '') {
      this.http
        .get<SearchGifsResponse>(`${this.url}/trending`, { params })
        .subscribe((resp) => {
          this.gifs = this.gifs.concat(resp.data);
        });
    } else {
      this.http
        .get<SearchGifsResponse>(`${this.url}/search`, { params })
        .subscribe((resp) => {
          this.gifs = this.gifs.concat(resp.data);
        });
    }
  }

  countView(id: string) {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<ViewCountGifResponse>(
      `https://giphy.com/api/v1/proxy-gif/${id}/view-count`,
      { params }
    );
  }
}
