import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class ProgressFormComponent extends Component {
  @tracked value;
  @tracked newProgress;
  @tracked goal = localStorage.getItem("goal");
  @tracked currentPercentage = localStorage.getItem("progress");
  @tracked currentMiles = this.currentPercentage
    ? ((+this.currentPercentage.slice(-1) / 100) * this.goal)
    : 0;

  @action
  updateValue(event) {
    this.value = event.target.value;
    this.newProgress = +this.currentMiles + +this.value;
  }

  @action
  handleSubmit(event) {
    event.preventDefault();
    let updatedPercentage = this.updatePercentage();
    localStorage.setItem("progress", `${updatedPercentage}%`);
    window.location.reload();
  }

  @action
  newGoal(){
    localStorage.removeItem("goal");
    localStorage.removeItem("progress");
    window.location.reload();
  }

  updatePercentage(){
    return (this.newProgress / this.goal) * 100;
  }
}
