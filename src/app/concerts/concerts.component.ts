import {Component, OnInit} from '@angular/core';
import {ArtistsService} from '../service/artists.service';
import {Artist} from '../model/artist';
import {Concert} from '../model/concert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class ConcertsComponent implements OnInit {

  constructor(private artistsService: ArtistsService,
              private router: Router) {
  }

  concerts!: Array<Concert>;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.artistsService.getAll().subscribe(
      res => {
        this.concerts = res;
        const artistName = this.concerts[0].artist.artistName;
        const f = 0;
      },
      err => {
        alert('An error occurred');
      }
    );
  }

  goToLocationRegistration(): void {
   this.router.navigateByUrl('/new-location');
  }

  goToVenueRegistration(): void {
    this.router.navigateByUrl('/new-venue');
  }

  goToArtistRegistration(): void {
    this.router.navigateByUrl('/new-artist');
  }

  goToConcertRegistration(): void {
    this.router.navigateByUrl('/new-concert');
  }
}
