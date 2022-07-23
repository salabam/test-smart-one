import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import { map, Observable } from "rxjs";
import { Cat } from "../models/cat";
import { Dog } from "../models/dog";
import { CatsFilter, DogsFilter } from "../models/filter";

@Injectable()
export class PetsService {

    private readonly api = environment.apiUrl;
    private readonly dogsUrl = '/dogs';
    private readonly catsUrl = '/cats';

    constructor(private http: HttpClient, private router: Router) { }

    public getDogs(filter: DogsFilter): Observable<Dog[]> {
        return this.http.get<Dog[]>(this.api + this.dogsUrl, { params: this.getParams(filter)})
            .pipe(
                map(items => items.map(i => new Dog(i)))
            );
    }

    public getCats(filter: CatsFilter): Observable<Cat[]> {
        return this.http.get<Cat[]>(this.api + this.catsUrl, { params: this.getParams(filter)})
            .pipe(
                map(items => items.map(i => new Cat(i)))
            );
    }

    private getParams(filter: DogsFilter | CatsFilter): HttpParams {
        return new HttpParams({ fromObject: this.getNotEmptyParam(filter) }).append("max_weight", 1000);
    }

    private getNotEmptyParam(filter: DogsFilter | CatsFilter): { [key: string]: any } {
        const obj = {};
        Object.keys(filter).forEach(key => {
            const value = filter[key];
            if ((typeof value === 'string' && value.length) || (typeof value === 'number' && value >= 0)) {
                obj[key] = value;
            } 
        });
        return obj;
    }

}