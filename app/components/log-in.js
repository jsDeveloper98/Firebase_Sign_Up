import Component from '@glimmer/component';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import { inject as service } from '@ember/service';

export default class LogInComponent extends Component {
  @tracked name;
  @tracked pass;
  @service store;

  @action async accessToProfile() {
    const data = await this.store.findRecord("user", "T7c8HHdeGlnoPPnhChze");
    if (this.name === data.name && this.pass === data.password) {
      console.log("Done.");
    } else {
      console.log("Failed.");
    }
    console.log("attempt Name: " + this.name);
    console.log("firebase Name: " + data.name);
    console.log("attempt Pass: " + this.pass);
    console.log("firebase Pass: " + data.password);
  }
}
