//delete service

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const users = [
      { id: 11,username: 'Dr Nice',password:"ok", email:"email@this.email.com" }     
    ];
    
    return {authenticate:users};
  }
}
