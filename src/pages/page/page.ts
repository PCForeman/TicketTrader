import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, Tabs } from "ionic-angular";

/**
 * Generated class for the Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-page",
  templateUrl: "page.html"
})
export class Page {
  @ViewChild("myTab") tabRef: Tabs;

  homeRoot = "HomePage";
  ticketsRoot = "TicketsPage";
  sellRoot = "SellPage";
  accountRoot = "AccountPage";

  tab1Root = "TicketsPage";
  tab2Root = "HomePage";
  tab3Root = "SellPage";
  tab4Root = "AccountPage";

  constructor(public navCtrl: NavController) {}
}
