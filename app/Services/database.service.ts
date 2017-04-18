import { Injectable } from '@angular/core';
import { Couchbase } from "nativescript-couchbase";

@Injectable()
export class DataBaseService {

    private _isIntanstiaded: boolean;
    private _storage: any;

    constructor() {
        if (!this._isIntanstiaded) {
            this._storage = new Couchbase("tinyurl");
            this._storage.createView("urls", "1", (document, emitter) => {
                 if(document.type == "url"){
                     emitter.emit( document._id, document );
                 }
            });

            this._isIntanstiaded = true;
        }
    }

    public getDatabase() {
        return this._storage;
    }

}