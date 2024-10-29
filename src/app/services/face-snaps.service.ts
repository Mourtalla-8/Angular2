import { Injectable } from "@angular/core";
import { faceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    private faceSnaps: faceSnap[] = [
      new faceSnap (
        'me',
        'Mon meilleur ami depuis tout petit !🤣',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        520
      ),
      new faceSnap (
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2560px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        98
      ).withLocation('à la montagne'), 
      new faceSnap (
        'Un bon repas',
        'Yummy !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        0
      )
    ]

    getFaceSnap(): faceSnap[] {
        return [...this.faceSnaps]
    }

    getFaceSnapById(faceSnapId: string): faceSnap {
      const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId)
      if (!foundFaceSnap) {
          throw new Error('FaceSnap not found')
      }
      return foundFaceSnap
    }
    
    snapOrUnsnapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
      const foundFaceSnap = this.getFaceSnapById(faceSnapId)
      foundFaceSnap.snap(snapType)
  }
}
