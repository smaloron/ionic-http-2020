import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Login",
      url: "/login",
      icon: "person",
    },
    {
      title: "Inscription",
      url: "/register",
      icon: "person-add",
    },
    {
      title: "Accueil",
      url: "/home",
      icon: "home",
    },
    {
      title: "Random user",
      url: "/random-user",
      icon: "person",
    },
    {
      title: "Liste des utilisateurs",
      url: "/random-user-list",
      icon: "people",
    },
    {
      title: "Liste des tâches",
      url: "/task-list",
      icon: "cloud-done",
    },
  ];

  private securedRoutes = ["/task-list"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private user: UserService
  ) {
    this.initializeApp();
  }

  public getLinkColor(url) {
    if (this.securedRoutes.indexOf(url) >= 0 && !this.user.isAuthenticated()) {
      return "medium";
    } else {
      return "light";
    }
  }

  public hideMenu(url) {
    if (this.securedRoutes.indexOf(url) >= 0) {
      return !this.user.isAuthenticated();
    } else if (url == "/login" || url == "/register") {
      return this.user.isAuthenticated();
    } else {
      return false;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
