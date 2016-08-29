//先試試看這一行
import { provideRouter,RouterConfig }   from '@angular/router';
import { HeroesComponent } from './pages/heroes';
import { DashboardComponent } from './pages/dashboard';
import { HeroDetailComponent } from './components/hero-detail'

export const routes:RouterConfig=[
    //{path:'',component:HeroesComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    {path:'detail/:id',component:HeroDetailComponent},
];

export const APP_ROUTER_PROVIDERS=[
    provideRouter(routes)
];