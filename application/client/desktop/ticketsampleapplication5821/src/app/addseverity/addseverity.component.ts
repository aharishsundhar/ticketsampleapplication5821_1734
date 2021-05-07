import { Component, OnInit } from '@angular/core';
import { AddseverityService } from './addseverity.service';

@Component({
  selector: 'app-addseverity',
  templateUrl: './addseverity.component.html',
  styleUrls: ['./addseverity.component.scss'],
})

export class AddseverityComponent implements OnInit {
    public severitysample = {
        name: '',
        description: '',
    }

    constructor (
        private addseverityService: AddseverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addseverityService.GpCreate(this.severitysample).subscribe(data => {
            this.severitysample.name = ''
 	 	this.severitysample.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}