import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-admin-view",
  templateUrl: "admin-view.html"
})
export class AdminViewPage {
  adminRoot = "AdminPage";
  admin2Root = "Admin2Page";
  admin3Root = "Admin3Page";
  admin4Root = "AdminpaymentsPage";
  constructor(public navCtrl: NavController) {}
}
