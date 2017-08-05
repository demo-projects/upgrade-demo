import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  store(value) {
    console.log('storing the value: ' + value);
  }

}
