import { DataModel } from './../shared/models/data.model';
import { SampleDataService } from '../shared/services/sample-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  listData;
  dataSource: MatTableDataSource<DataModel>;
  displayedColumns: string[] = [
    'id',
    'name',
    'phone',
    'email',
    'company',
    'date_entry',
    'org_num',
    'address_1',
    'city',
    'zip',
    'geo',
    'pan',
    'pin',
    'status',
    'fee',
    'guid',
    'date_exit',
    'date_first',
    'date_recent',
    'url',
    'action'
  ];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private sampleDataService: SampleDataService
  ) { }

  ngOnInit(): void {
    this.sampleDataService.getSampleData().subscribe(
      list => {
        console.log(list);
        this.listData = list;
        this.dataSource = new MatTableDataSource(this.listData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    );
  }
  onsubmit(id: number , status: string) {
    console.log(id, status);
    const params: any = {
      Id: id,
      Status: status

    };
    // this.sampleDataService.postData(params).subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // );
  }

}
