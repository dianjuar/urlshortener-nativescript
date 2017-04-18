import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ShrinkUrlService {

    constructor(private _http: Http) { }

    public shrink(longUrl: string): Observable<string> {

        console.log(longUrl);

        return this._http.get("https://tinyurl.com/api-create.php?url=" + longUrl)
                         .map(result => {                            
                            return result.text();
                         })
                         .do(shrunkUrl => console.log("RESULT: ", shrunkUrl));
    }
}