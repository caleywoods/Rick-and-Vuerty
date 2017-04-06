//Create our todo item component
Vue.component('todo-item', {
  template:
    `<li>
      {{ todo.text }} <i class="fa fa-check-square-o" aria-hidden="true" v-on:click="completeTask(todo)"></i>
    </li>`,
  props: ['todo'],
  methods: {
    completeTask: (todo) => {
      todo.complete = !todo.complete;
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    todos: [
      {text: 'Visit the citadel of Ricks', complete: true},
      {text: 'Meet with the council of Ricks', complete: false},
      {text: 'Receive my very own Morty', complete: false},
      {text: 'Get Morty insurance', complete: false}
    ]
  }
})
