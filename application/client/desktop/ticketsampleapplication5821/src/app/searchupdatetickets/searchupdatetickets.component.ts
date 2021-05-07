import { Component, OnInit } from '@angular/core';
import { SearchupdateticketsService } from './searchupdatetickets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchupdatetickets',
  templateUrl: './searchupdatetickets.component.html',
  styleUrls: ['./searchupdatetickets.component.scss'],
})

export class SearchupdateticketsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'groups', field: 'groups'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
    typesampleitemArray: any = [];
    severitysampleitemArray: any = [];
    public ticketsample = {
        name: '',
        groups: '',
        description: '',
        types: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchupdateticketsService: SearchupdateticketsService,
        private router: Router,
    ) { }

    ngOnInit() {
    }
    typesampleGpGetAllValues() {
        this.searchupdateticketsService.typesampleGpGetAllValues().subscribe(data => {
            this.typesampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severitysampleGpGetAllValues() {
        this.searchupdateticketsService.severitysampleGpGetAllValues().subscribe(data => {
            this.severitysampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpSearch() {
        this.searchupdateticketsService.GpSearch(this.ticketsample).subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./modifydeleteticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}