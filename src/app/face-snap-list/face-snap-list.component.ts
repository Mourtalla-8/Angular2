import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { faceSnap } from '../models/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: faceSnap[]

  constructor (private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnap()
  }
}
