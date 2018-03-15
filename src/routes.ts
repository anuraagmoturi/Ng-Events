import { Routes } from "@angular/router";
import {EventsDetailsComponent} from "./app/events/events-details/events-details.component";
import {EventsComponent} from "./app/events/events.component";
import {CreateEventComponent} from "./app/events/create-event/create-event.component";
import {Error404Component} from "./app/errors/404.component";
import {EventRouteActivatorGuard} from "./app/events/events-details/event-route-activator.guard";
import {EventResolverService} from "./app/events/event-resolver.service";
import {CreateSessionComponent} from "./app/events/events-details/create-session/create-session.component";

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent,
    canDeactivate:['canDeactiveCreateEvent'] },
  { path: 'events', component: EventsComponent,
    resolve:{events:EventResolverService}
  },
  { path: 'events/:id', component: EventsDetailsComponent,
    canActivate:[EventRouteActivatorGuard] },
  { path:'events/session/new', component:CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch:'full' },
  { path:'user', loadChildren: './app/user-profile/user.module#UserModule' }
];
