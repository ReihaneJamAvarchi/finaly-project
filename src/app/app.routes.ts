import { Routes } from '@angular/router';
import { Site2Component } from './site-2/site-2.component';
import { Site1Component } from './site-1/site-1.component';
import { Site3Component } from './site-3/site-3.component';
import { Site4Component } from './site-4/site-4.component';

export const routes: Routes = [
    {path:'' , component:Site1Component},
    {path:'site-2' , component:Site2Component},
    {path:'site-3' , component:Site3Component},
    {path:'site-4' , component:Site4Component},
    
];
