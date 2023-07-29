import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalIdService {
  private readonly LOCAL_ID_KEY = 'localId';

  constructor() {}

  setLocalId(localId: number): void {
    localStorage.setItem(this.LOCAL_ID_KEY, localId.toString());
  }

  getLocalId(): string|null {
    return localStorage.getItem(this.LOCAL_ID_KEY);
  }
}