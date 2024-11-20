import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { catchError, EMPTY } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  providers: [ApiService],
})
export class PhotosComponent {

  photos: any[] = []

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getPhotos();
  }


  getPhotos() {
    this.apiService.getPhotos().pipe(
      catchError(() => {
        return EMPTY
      })
    ).subscribe((res: any[]) => {
      this.photos = res;
    })
  }

}
