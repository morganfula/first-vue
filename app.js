Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// getting access to element
// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputElement.value; // store value
//   const listItemElement = document.createElement('li'); // create a list item (li) Element
//   listItemElement.textContent = enteredValue;
//   listElement.appendChild(listItemElement); // add
//   inputElement.value = '';
// }

// buttonElement.addEventListener('click', addGoal);
