import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelUserComponent } from './user/user-page.component';
import { UserDetailsComponent } from './user/details/user-details.component';

export const appRoutes: Routes = [
    { path: 'user',
    children: [
        { path: 'search', component:  PanelUserComponent},
        { path: ':id', component:  UserDetailsComponent}
    ] },
    { path: '', redirectTo: 'about', pathMatch: 'full' }
];

