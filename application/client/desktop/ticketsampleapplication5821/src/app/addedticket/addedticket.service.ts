import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class AddedticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(ticketsample): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/ticketsample', ticketsample);
    }
    typesampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/typesample');
    }
    severitysampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severitysample');
    }
}