import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
    return this.httpClient.get('api/users');
  }

  getUserById(id: number) {
    return this.httpClient.get("api/users/" + id);
  }

  updateUser(id: number, updateBody: any) {
    return this.httpClient.put("api/users/" + id, updateBody);
  }
}
