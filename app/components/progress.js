import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ProgressComponent extends Component {
  @tracked goal = localStorage.getItem("goal");
  @tracked progress = localStorage.getItem("progress") || "0%";
}
