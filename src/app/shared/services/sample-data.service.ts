import { DataModel } from './../models/data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  private fileUrl = '../../../assets/data/data.json';
  private baseUrl = 'example.com';
  constructor(
    public http: HttpClient,
  ) { }
  getSampleData(): Observable<DataModel> {
   return this.http.get<DataModel>(this.fileUrl);
  }
  // postData(params: any) {
  //   return this.http.post(this.baseUrl + '/api/submit', params);
  // }
}

