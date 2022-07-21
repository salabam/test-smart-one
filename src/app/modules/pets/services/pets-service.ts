import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "environments/environment";

@Injectable()
export class PetsService {

    private readonly api = environment.apiUrl;

    constructor(private http: HttpClient, private router: Router) { }

}