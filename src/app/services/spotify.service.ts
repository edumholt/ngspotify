import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Artist } from '../../Artist';

@Injectable()
export class SpotifyService {
    private searchUrl: string;

    constructor(private http: Http) {

    }

    searchMusic(str: string, type = 'artist'): Promise<Artist[]> {
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this.http.get(this.searchUrl)
            .toPromise()
            .then(res => res.json().data as Artist[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    
}