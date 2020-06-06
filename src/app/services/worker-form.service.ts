import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class WorkerformService{

    url = `${environment.url}/api`

    constructor(private http: HttpClient) { }
    insertData(data){
      return this.http.post(`${this.url}/workerDataInsert`, data);
    }

}
