import { Component } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

import { SkeletalComponent } from '../../../shared/components/skeletal/skeletal.component';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule, SkeletalComponent],
  templateUrl: './photos.component.html',
  styles: `
  .img_section .img_section_item{
    max-width: 200px;
  }
  .img_section .img_section_item img{
    max-width: 100%;
  }
  `,
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
