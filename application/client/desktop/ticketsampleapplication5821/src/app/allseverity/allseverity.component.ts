import { Component, OnInit } from '@angular/core';
import { AllseverityService } from './allseverity.service';

@Component({
  selector: 'app-allseverity',
  templateUrl: './allseverity.component.html',
  styleUrls: ['./allseverity.component.scss'],
})

export class AllseverityComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public severitysample = {
        name: '',
        description: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private allseverityService: AllseverityService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allseverityService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}