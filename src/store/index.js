import { createStore } from 'vuex'

const state = {
    count: 0,
    todos: [
        {
            id: 0,
            title: "Ut corrupti eum. Magnam culpa et itaque voluptas maiores et sed molestiae ad. Ut earum est tempore enim odio hic architecto et iure. Qui dolore velit illo velit atque reprehenderit sed cupiditate.",
            completed: false
          },
          {
            id: 1,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
          },
          {
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false
          },
          {
            id: 3,
            title: "fugiat veniam minus",
            completed: false
          },
          {
            id: 4,
            title: "et porro tempora",
            completed: true
          },
          {
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
          }
    ]
}

const getters = {
    totalTodos(state) {
        console.log(state.todos, '???getter');
        return state.todos
    }
}

const mutations = {
  deleteTodo(state, todoId) {
    state.todos = state.todos.filter(todo => todo.id != todoId)
  },
  ADD_TODO(state, newTodo) {
    state.todos.unshift(newTodo)
  }
}

const actions = {
  addTodo({commit}, newTodo) {
    commit('ADD_TODO', newTodo)
  }
}


export default createStore({
    state,
    getters,
    mutations,
    actions
})