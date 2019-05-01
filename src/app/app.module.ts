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
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { File } from "@ionic-native/file";
import { HomePageModule } from "../pages/home/home.module";
import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPage } from "../pages/register/register";
import { MyApp } from "./app.component";
import { FbConfig } from "./app.firebase.config";
import { AES256 } from "@ionic-native/aes-256";

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
    [AES256],
    [StatusBar],
    [Toast],
    [File],
    [SplashScreen],
    [GoogleMaps],
    [AngularFireAuth],
    [AngularFireDatabase],
    [Geolocation],
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
