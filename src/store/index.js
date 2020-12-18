import { createStore } from 'vuex'

const state = {
    todos: [
        {
            id: 0,
            title: "Ut corrupti eum. Magnam culpa et itaque voluptas maiores et sed molestiae ad. Ut earum est tempore enim odio hic architecto et iure. Qui dolore velit illo velit atque reprehenderit sed cupiditate.",
            completed: false,
            active: true
          },
          {
            id: 1,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false,
            active: true
          },
          {
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: true,
            active: true
          },
          {
            id: 3,
            title: "fugiat veniam minus",
            completed: false,
            active: true
          },
          {
            id: 4,
            title: "et porro tempora",
            completed: true,
            active: true
          },
          {
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false,
            active: true
          }
    ],
    array: []
}

const getters = {
    totalTodos(state) {
      return state.todos
    },
    // uncompletedTodos(state) {
    //   state.todos = state.todos.filter(todo => !todo.completed)
    // },
    // completedTodos(state) {
    //   state.todos = state.todos.filter(todo => todo.completed)
    // }
}

const mutations = {
  deleteTodo(state, todoId) {
    state.todos = state.todos.filter(todo => todo.id != todoId)
  },
  ADD_TODO(state, newTodo) {
    state.todos.unshift(newTodo)
  },
  trueAllTodo(state) {
    state.todos = state.todos.filter(todo => todo.completed = true)
  },
  deleteAllTodo(state) {
    state.todos = []
  },
  editTodos(state, data) {
    // state.todos[id].title = item
    state.todos.map(todo => {
      if(todo.id == data[0]) {
        todo.title = data[1]
      }
    })
    console.log(data[1])  
  }
  // uncompletedTodos(state) {
  //   state.todos = state.todos.filter(todo => !todo.completed)
  // },
  // completedTodos(state) {
  //   state.todos = state.todos.filter(todo => todo.completed)
  // }
}

const actions = {
  addTodo({commit}, newTodo) {
    commit('ADD_TODO', newTodo)
  },
  editTodo({commit}, data){
    commit('editTodos', data)
  }
  // uncompletedTodos({commit}) {
  //   // state.todos = state.todos.filter(todo => !todo.completed)
  //   commit('uncompletedTodos')
  // },
  // completedTodos({commit}) {
  //   // state.todos = state.todos.filter(todo => !todo.completed)
  //   commit('completedTodos')
  // }
}


export default createStore({
    state,
    getters,
    mutations,
    actions
})