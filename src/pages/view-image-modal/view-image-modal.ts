import { Component, ViewChild, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the ViewImageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-view-image-modal",
  templateUrl: "view-image-modal.html"
})
export class ViewImageModalPage {
  @ViewChild("canvas") canvasEl: ElementRef;

  private canvas: any;
  private context: any;
  myImg: any;
  constructor(
    public navCtrl: NavController,
    private vCtrl: ViewController,
    public navParams: NavParams
  ) {}

  async ionViewDidLoad() {
    const data = this.navParams.get('image');
    console.log(data);
    this.myImg = new Image();
    this.myImg.src = data.url;
    this.canvas = this.canvasEl.nativeElement;
    this.canvas.width = (window.innerWidth / 100) * 90;
    this.canvas.height = (window.innerHeight / 100) * 92.5;
    await this.initialiseCanvas();
  }

  async displayTicket() {
    this.context.drawImage(
      this.myImg,
      0,
      0,
      this.myImg.width,
      this.myImg.height,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
   var button = document.getElementById('displayButton');
   button.hidden = true;
  }

  initialiseCanvas() {
    if (this.canvas.getContext) {
      this.setupCanvas();
    }
  }

  async setupCanvas() {

    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "#3e3e3e";
    this.context.fillRect(0, 0, 800, 800);
  }

  close() {
    this.vCtrl.dismiss();
  }
}
