import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },

  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "random-user",
    loadChildren: () =>
      import("./pages/random-user/random-user.module").then(
        (m) => m.RandomUserPageModule
      ),
  },
  {
    path: "random-user-list",
    loadChildren: () =>
      import("./pages/random-user-list/random-user-list.module").then(
        (m) => m.RandomUserListPageModule
      ),
  },
  {
    path: "user-details/:id",
    loadChildren: () =>
      import("./pages/user-details/user-details.module").then(
        (m) => m.UserDetailsPageModule
      ),
  },
  {
    path: 'task-list',
    loadChildren: () => import('./pages/task-list/task-list.module').then( m => m.TaskListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
