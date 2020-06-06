import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class WorkerDetailService{

    url = `${environment.url}/api`

    constructor(private http: HttpClient) { }

    getMigrantsList() {
      return this.http.get(`${this.url}/migrantList/`);
    }
    getMigrantsHeader(){
      return this.http.get(`${this.url}/migrantListHeader/`);
    }
}
