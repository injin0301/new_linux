import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { HelperComponent } from '../pages/helper/helper.component';
import { VersionComponent } from '../pages/version/version.component';

export const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'help', component: HelperComponent},
   {path: 'version', component: VersionComponent},
   { path: '**', redirectTo: '', pathMatch: 'full' }
];
