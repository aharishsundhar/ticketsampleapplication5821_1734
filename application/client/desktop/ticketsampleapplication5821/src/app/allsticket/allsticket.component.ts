import { Component, OnInit } from '@angular/core';
import { AllsticketService } from './allsticket.service';

@Component({
  selector: 'app-allsticket',
  templateUrl: './allsticket.component.html',
  styleUrls: ['./allsticket.component.scss'],
})

export class AllsticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'groups', field: 'groups'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
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
        private allsticketService: AllsticketService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.allsticketService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}