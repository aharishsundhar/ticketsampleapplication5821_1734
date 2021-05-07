import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class ModifydeleteticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpUpdate(ticketsample): Observable<any> {
        return this.http.put(this.sharedService.DESKTOP_API + '/ticketsample', ticketsample);
    }
    GpDelete(ticketsampleId): Observable<any> {
        return this.http.delete(this.sharedService.DESKTOP_API + '/ticketsample/' + ticketsampleId);
    }
    GpGetNounById(ticketsampleId): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/ticketsample/' + ticketsampleId);
    }
    typesampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/typesample');
    }
    severitysampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severitysample');
    }
}