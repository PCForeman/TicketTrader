import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Toast } from "@ionic-native/toast";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { DocumentViewer } from "@ionic-native/document-viewer/";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path"
import { HomePageModule } from "../pages/home/home.module";
import { LoginPage } from "../pages/login/login";
import { LoginPageModule } from "../pages/login/login.module";
import { RegisterPage } from "../pages/register/register";
import { MyApp } from "./app.component";
import { FbConfig } from "./app.firebase.config";
import { AES256 } from "@ionic-native/aes-256";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorage} from "angularfire2/storage";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { AndroidPermissions } from '@ionic-native/android-permissions/';

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
    [FilePath],
    [StatusBar],
    [AngularFireStorage],
    [AndroidPermissions],
    [DocumentViewer],
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
