import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {App, Config, Nav, Platform} from 'ionic-angular';

import {FirstRunPage, MainPage} from '../pages/pages';
import {Settings} from '../providers/providers';
import {AccountStorage} from "../providers/account/account-storage";

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item (click)="logout()">Se déconnecter</button>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  // Root page
  rootPage = null;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Profile', component: 'ProfilePage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' },
    { title: 'Comptes', component: 'AccountPage'}
  ];

  constructor(private translate: TranslateService,
              platform: Platform,
              settings: Settings,
              public app: App,
              private config: Config,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              public accountStorage: AccountStorage) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initRootPage();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('fr');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  initRootPage() {
    // If a user is logged go to main page !
    this.accountStorage.getAccount().then((res: any) => {
      this.rootPage = (res == null) ? FirstRunPage : MainPage;
    }, (err) => {
      this.rootPage = FirstRunPage;
    });
  }

  logout() {
    this.accountStorage.logout().then(() => {
      this.app.getRootNav().setRoot(FirstRunPage);
    });
  }
}
