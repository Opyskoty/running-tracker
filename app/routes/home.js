import Route from "@ember/routing/route";

export default class HomeRoute extends Route {
  model() {
    //we'll use ember data to get the actual goal
    return [
      {
        progress: localStorage.getItem("progress"),
        goal: localStorage.getItem("goal"),
      },
    ];
  }
}
