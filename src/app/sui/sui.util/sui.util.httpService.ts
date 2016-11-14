import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SuiHttpService {

    // Resolve HTTP using the constructor
    constructor(private http: Http) { }

    get(url: string): Observable<any> {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);

    }

    add(body: Object, url: string,
        header: Object = { 'Content-Type': 'application/json' }): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers(header);
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(body: Object, url: string,
        header: Object = { 'Content-Type': 'application/json' }): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers(header);
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(url: string): Observable<any> {
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
