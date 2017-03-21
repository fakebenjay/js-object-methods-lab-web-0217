class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return `NO!`;
  }

  passBill() {
    return `You can do that!`;
  }

  doCharity() {
    return `I like to help people.`;
  }

  conductPressInterview() {
    return `I am proud to be an American.`;
  }

  sayHi() {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`;
  }

}

var georgeWashington = new President("George Washington", "Federalist", "8 years", "Virginia");
var abrahamLincoln = new President("George Washington", "Republican", "4 years", "Illinois");
var richardNixon = new President("George Washington", "Republican", "5 years", "New York");
var jimmyCarter = new President("George Washington", "Democrat", "4 years", "Georgia");
