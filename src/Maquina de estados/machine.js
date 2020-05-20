const machine = {
  counter: 10,
  array: [],
  state: "q0",
  transitions: {
    q0: {
      change: function () {
        console.log("Estado inicial a q1");
        this.changeState("q1");
        this.dispatch("change");
      },
    },
    q1: {
      change: function () {
        ((arr, counter) => {
          function generarate(i = 0) {
            if (i === counter) {
              return;
            }
            arr.push("a");
            generarate(i + 1);
          }
          generarate();
        })(this.array, this.counter);
        console.log("Estado q1 a estado final q2");
        this.changeState("q2");
        return this.dispatch("change");
      },
    },
    q2: {
      change() {
        ((arr, counter) => {
          function generarate(i = 0) {
            if (i === counter) {
              return;
            }
            arr.push("b");
            generarate(i + 1);
          }
          generarate();
        })(this.array, this.counter);
        console.log("El estado final es: ", this.array.join(""));
      },
    },
  },
  dispatch(actionName) {
    const actions = this.transitions[this.state];
    const action = this.transitions[this.state][actionName];
    if (action) {
      action.apply(machine);
    } else {
      //action is not valid for current state
    }
  },
  changeState(newState) {
    //validate that newState actually exists
    this.state = newState;
  },
};

let startMachine = Object.create(machine);
startMachine.dispatch("change");
