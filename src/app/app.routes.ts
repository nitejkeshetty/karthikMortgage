import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component'; 
import { ContentComponent } from './content/content.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
export const routes: Routes = [
    {path:"",component:ContentComponent},
    {path:"home",component:ContentComponent},
    {path:"about",component:AboutComponent},
    {path:"contactUs",component:ContactUsComponent}
];
