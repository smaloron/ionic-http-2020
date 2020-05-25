import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

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
    path: "task-list",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/task-list/task-list.module").then(
        (m) => m.TaskListPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
