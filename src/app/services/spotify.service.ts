import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';

import { Artist } from '../../Artist';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string

  constructor(private http: Http) {
  }

  searchMusic(str: string, type = 'artist'){
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this.http.get(this.searchUrl)
      .map((res:Response) => res.json())
  }
  
  getArtist(id: string) {
    this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this.http.get(this.artistUrl)
      .map((res:Response) => res.json())
  }
    
}