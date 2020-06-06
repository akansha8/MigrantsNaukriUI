import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';
import { TableUtil } from './tableUtil';
import { WorkerformService } from '../services/worker-form.service';
import { HttpClient } from '@angular/common/http';
import { WorkerDetailService } from '../services/worker-detail.servie';

@Component({
  selector: 'app-worker-detail',
  templateUrl: './worker-detail.component.html',
  styleUrls: ['./worker-detail.component.css']
})
export class WorkerDetailComponent {
  public Products: any
  public ProductHeader: any;
  headerLabel = "";
  table: any;
  dataSource: any;
  public ProductDetails: object = [];

  constructor(private workerdetail: WorkerDetailService) {
    this.workerdetail.getMigrantsHeader().subscribe(
      resp => {
        this.ProductHeader = resp;
      }
    );

    this.workerdetail.getMigrantsList().subscribe(
      resp => {
        this.Products = resp;
      }
    );

  }

  ngOnInit() {
  }
  exportTable() {
    TableUtil.exportTableToExcel('ExampleMaterialTable');
  }
  exportArray() {
    const onlyNameAndSymbolArr = this.dataSource.map(x => ({
      name: x.name,
      symbol: x.symbol
    }));
    TableUtil.exportArrayToExcel(onlyNameAndSymbolArr, 'ExampleArray');
  }
  searchProduct() {
    const obj = this.Products.filter(m => m.skillset == this.headerLabel);
    this.ProductDetails = obj;
    return this.ProductDetails;
  }


}

