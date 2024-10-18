import { Routes } from '@angular/router';
import { Site2Component } from './site-2/site-2.component';
import { Site1Component } from './site-1/site-1.component';

export const routes: Routes = [
    {path:'' , component:Site1Component},
    {path:'site-2' , component:Site2Component}
    
];
