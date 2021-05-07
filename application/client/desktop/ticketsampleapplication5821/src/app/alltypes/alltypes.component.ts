import { Component, OnInit } from '@angular/core';
import { AlltypesService } from './alltypes.service';

@Component({
  selector: 'app-alltypes',
  templateUrl: './alltypes.component.html',
  styleUrls: ['./alltypes.component.scss'],
})

export class AlltypesComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },];
    public typesample = {
        name: '',
        description: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private alltypesService: AlltypesService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.alltypesService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}