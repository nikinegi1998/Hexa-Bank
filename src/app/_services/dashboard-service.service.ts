import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  constructor(private http: HttpClient) { }

  Dashboard_API = "https://1.api.fy23ey06.careers.ifelsecloud.com/"

  getApiData() {
    return this.http.get(this.Dashboard_API)
  }

}
