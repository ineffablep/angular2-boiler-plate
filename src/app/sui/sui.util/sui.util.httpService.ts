import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SuiHttpService {

    constructor(private http: Http, private jsonp: Jsonp) { }
    getJsonp(url: string): Observable<any> {
        let params = new URLSearchParams();
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(url, { search: params })
            .map(response => <string[]> response.json()[1])
            .catch(this.handleError);
    }
    get(url: string,
        withCredentials: boolean = true,
        header: Object = {}): Observable<any> {
        let headers = new Headers(header);
        let options = new RequestOptions({ headers: headers, withCredentials: withCredentials });
        return this.http.get(url, options)
            .map(this.extractData)
            .catch(this.handleError);

    }

    add(body: Object, url: string, withCredentials: boolean = true,
        header: Object = { 'Content-Type': 'application/json' }): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers(header);
        let options = new RequestOptions({ headers: headers, withCredentials: withCredentials });
        return this.http.post(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(body: Object, url: string, withCredentials: boolean = true,
        header: Object = { 'Content-Type': 'application/json' }): Observable<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers(header);
        let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(url: string, withCredentials: boolean = true): Observable<any> {
        return this.http.delete(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || body;
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
