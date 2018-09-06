import { TestBed, inject } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatService]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
