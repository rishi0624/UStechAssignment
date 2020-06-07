import { DataModel } from './../shared/models/data.model';
import { SampleDataService } from '../shared/services/sample-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll-table',
  templateUrl: './virtual-scroll-table.component.html',
  styleUrls: ['./virtual-scroll-table.component.scss']
})
export class VirtualScrollTableComponent implements OnInit {

  listData: DataModel;
  constructor(
    private sampleDataService: SampleDataService,
  ) { }

  ngOnInit(): void {
    this.sampleDataService.getSampleData().subscribe(
      list => {
        console.log(list);
        this.listData = list;
      }
    );
  }
  onsubmit(id, status) {
    console.log(id, status);
  }
}
