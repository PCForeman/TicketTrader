import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Toast } from "@ionic-native/toast";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { Camera } from "@ionic-native/camera/ngx";
import { HomePageModule } from "../pages/home/home.module";
import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPage } from "../pages/register/register";
import { MyApp } from "./app.component";
import { FbConfig } from "./app.firebase.config";

@NgModule({
  declarations: [MyApp, RegisterPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FbConfig),
    LoginPageModule,
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, LoginPage, RegisterPage],
  providers: [
    StatusBar,
    Toast,
    Camera,
    SplashScreen,
    GoogleMaps,
    AngularFireAuth,
    AngularFireDatabase,
    AngularFireStorage,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
