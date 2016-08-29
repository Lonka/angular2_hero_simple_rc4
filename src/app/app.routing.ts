//先試試看這一行
import { provideRouter,RouterConfig }   from '@angular/router';
import { HeroesComponent } from './pages/heroes';

export const routes:RouterConfig=[
    //{path:'',component:HeroesComponent},
    {path:'heroes',component:HeroesComponent},
];

export const APP_ROUTER_PROVIDERS=[
    provideRouter(routes)
];