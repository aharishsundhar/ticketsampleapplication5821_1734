import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SearchupdateticketsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpSearch(ticketsample): Observable<any> {
        const temp = [];
 	 	const objectKeyPair = Object.entries(ticketsample);
 	 	objectKeyPair.forEach((element, index) => {
 	 	if (element[1]) {
 	 	temp.push(`${element[0]}=${element[1]}`);
 	 	}
 	 	});
 	 	return this.http.get(this.sharedService.DESKTOP_API + `/ticketsample/get/search${temp.length > 0 ? `?${temp.join('&')}` : ''}`);
    }
    typesampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/typesample');
    }
    severitysampleGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severitysample');
    }
}