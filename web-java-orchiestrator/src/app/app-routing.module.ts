import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DockerListComponent} from "./docker-container-list/docker-container-list";
import {DockerDetailsComponent} from "./docker-details/docker-details.component";
import {DockerImageListComponent} from "./docker-image-list/docker-image-list.component";
import {DockerImageDetailsComponent} from "./docker-image-details/docker-image-details.component";
import {DockerNetworkDetailsComponent} from "./docker-network-details/docker-network-details.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'container', component: DockerListComponent},
  {path: 'images', component: DockerImageListComponent},
  {path: 'detail/:id', component: DockerDetailsComponent},
  {path: 'detailImage/:id', component: DockerImageDetailsComponent},
  {path: 'detailNetwork/:id', component: DockerNetworkDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
