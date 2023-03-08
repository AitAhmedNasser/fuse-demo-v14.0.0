import { Route } from '@angular/router';
import { ContentieuxComponent } from './contentieux.component';
import { ContentieuxResolver } from './contentieux.resolvers';

export const ContentieuxRoutes: Route[] = [
    {
        path: '',
        component: ContentieuxComponent,
        resolve: {
            data: ContentieuxResolver,
        },
    },
];
