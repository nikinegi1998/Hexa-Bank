import { Component, OnInit } from '@angular/core';
import { DashboardServiceService } from '../_services/dashboard-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service: DashboardServiceService) { }

  ngOnInit(): void {
    this.service.getApiData().subscribe((res) =>
      console.log(res)
    )
  }
}
