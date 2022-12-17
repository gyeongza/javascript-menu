const CoachValidation = require("../Validation/coachValidation");
const InputView = require("../View/InputView");
const { Console } = require("@woowacourse/mission-utils");

class Menu {
  #coachNames;

  constructor() {
    this.#coachNames;
  }

  getCoachNames() {
    InputView.getName(this.handleCoachNames);
  }

  handleCoachNames = (name) => {
    const error = CoachValidation.validateCoach(name);
    if (error) return this.getCoachNames();
    this.#coachNames = name.split(",").map((name) => {
      return name;
    });
    console.log(this.#coachNames);
    this.getDislikeMenu(this.#coachNames);
  };

  getDislikeMenu(coachNames) {
    InputView.getDislikeMenu(coachNames, this.handleDislikeMenu);
  }

  handleDislikeMenu = (dislikeMenu) => {
    console.log(dislikeMenu)
  }
}

module.exports = Menu;
