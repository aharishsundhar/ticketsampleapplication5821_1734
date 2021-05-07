import { Component, OnInit } from '@angular/core';
import { AddedticketService } from './addedticket.service';

@Component({
  selector: 'app-addedticket',
  templateUrl: './addedticket.component.html',
  styleUrls: ['./addedticket.component.scss'],
})

export class AddedticketComponent implements OnInit {
    typesampleitemArray: any = [];
    severitysampleitemArray: any = [];
    public ticketsample = {
        name: '',
        groups: '',
        description: '',
        types: '',
        severity: '',
    }

    constructor (
        private addedticketService: AddedticketService,
    ) { }

    ngOnInit() {
    }
    typesampleGpGetAllValues() {
        this.addedticketService.typesampleGpGetAllValues().subscribe(data => {
            this.typesampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severitysampleGpGetAllValues() {
        this.addedticketService.severitysampleGpGetAllValues().subscribe(data => {
            this.severitysampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.addedticketService.GpCreate(this.ticketsample).subscribe(data => {
            this.ticketsample.name = ''
 	 	this.ticketsample.groups = ''
 	 	this.ticketsample.description = ''
 	 	this.ticketsample.types = ''
 	 	this.ticketsample.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}