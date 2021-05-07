import { Component, OnInit } from '@angular/core';
import { AddtypesService } from './addtypes.service';

@Component({
  selector: 'app-addtypes',
  templateUrl: './addtypes.component.html',
  styleUrls: ['./addtypes.component.scss'],
})

export class AddtypesComponent implements OnInit {
    public typesample = {
        name: '',
        description: '',
    }

    constructor (
        private addtypesService: AddtypesService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addtypesService.GpCreate(this.typesample).subscribe(data => {
            this.typesample.name = ''
 	 	this.typesample.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}