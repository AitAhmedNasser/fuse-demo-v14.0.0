import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContentieuxService } from './contentieux.service';

@Injectable({
    providedIn: 'root',
})
export class ContentieuxResolver implements Resolve<any> {
    /**
     * Constructor
     */
    constructor(private _contentieuxtoService: ContentieuxService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this._contentieuxtoService.getData();
    }
}
