import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [
        SpotifyService
    ]
})
export class HomeComponent {
    searchStr: string;
    
    constructor(private service: SpotifyService) {

    }
    searchMusic() {
        this.service.searchMusic(this.searchStr).subscribe(res => {
            console.log(res.artists.items);
        })
    }
}