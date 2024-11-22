import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { catchError, EMPTY } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SkeletalComponent } from '../../skeletal/skeletal.component';
import { inject } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, SkeletalComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss',
  providers: [ApiService],
})
export class PhotosComponent {

  apiService = inject(ApiService);

  photos: any[] = [];
  isLoading = false;


  ngOnInit() {
    this.getPhotos();
  }


  getPhotos() {
    this.isLoading = true;
    this.apiService.getPhotos().pipe(
      catchError(() => {
        return EMPTY
      })
    ).subscribe((res: any[]) => {
      this.photos = res;
      this.isLoading = false;
    })
  }

}
