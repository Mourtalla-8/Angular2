import { Component, OnInit } from '@angular/core';
import { faceSnap } from '../models/face-snap';
import {  DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    // DecimalPipe,
    // PercentPipe,
    // CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: faceSnap;
  userHasSnapped!: boolean;
  buttonText!: string;

  constructor (private faceSnapService: FaceSnapService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
    }

  onSnap(): void {
    if (!this.userHasSnapped) {
      this.faceSnapService.snapOrUnsnapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!'
    } else {
      this.faceSnapService.snapOrUnsnapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!'
    }
    this.userHasSnapped = !this.userHasSnapped;
  }

  private prepareInterface() {
    this.userHasSnapped = false;
    this.buttonText = 'Oh Snap!';
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
