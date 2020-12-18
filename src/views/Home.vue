<template>
  <div class="home_todo">
    <form @submit="onSubmit">
      <input type="text" v-model="text" placeholder="Type here for add a new todo">
    </form>
    <div class="show">
      <p @click="dem = 0" :class=" [dem == 0 ? 'Allblue' : '']">All</p>
      <p @click="dem = 1" :class=" [dem == 1 ? 'Uncomblue' : '']">Uncompleted</p>
      <p style="border: 0; padding: 0px 0px 0px 10px; " @click="dem = 2" 
      :class=" [(dem == 2) ? 'Comblue' : '']">Completed</p>
    </div>
    <ul class="list_todo">
      <li v-for="(todo, key) in arrayTodos" :key="key">
        <input type="checkbox" :checked="todo.completed" v-model="todo.completed" @change="showbuttonDeleteAll()">
        <div class="content">
          A Few Seconds Ago
          <p v-if="todo.active" @click="todo.active = !todo.active">{{ todo.title }}</p>
          <textarea @keyup.enter="[editTodo([todo.id, todo.title]), todo.active = !todo.active]" v-model="todo.title" v-else name="" id="" cols="100" rows="10"></textarea>
        </div>
        <div class="btn">
          <button @click="[editTodo([todo.id, todo.title]), todo.active = !todo.active]">Edit</button>
          <button @click="deleteTodo(todo.id)">X</button>
        </div>
        </li>
    </ul>
    <div class="clickAll" >
      <input type="checkbox" name="" v-model="click" id="clickAll" :disabled="click" @click="trueAllTodo">
      <label for="clickAll" :class="[click ? 'cusor' : '']">Mark all as completed</label>
      <button v-show="click" @click="[deleteAllTodo(), click = false]">
        DELETE COMPLETED ({{ totalTodos.filter(todo => todo.completed).length }})</button>
    </div>
  </div>
  
</template>

<script>
import { mapActions,mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      text: '',
      array: [],
      dem: 0,
      click: false
    }
  },
  computed: {
    ...mapGetters(['totalTodos']), 
    arrayTodos() {
      if(this.dem == 0) {
        return this.totalTodos
      } else if(this.dem == 1) {
        return this.totalTodos.filter(todo => !todo.completed)
      } else {
        return this.totalTodos.filter(todo => todo.completed)
      }
    }
  },
  methods: {
    ...mapMutations(['deleteTodo', 'trueAllTodo', 'deleteAllTodo']),
    ...mapActions(['addTodo', 'editTodo']),
    onSubmit(event) {
      event.preventDefault()
      var i = Math.round(Math.random() * 1000)
      this.addTodo({id: i, title: this.text, completed: false, active: true})
      console.log(i)
      this.text = ''
    },
    getUncompletedTodos() {
      this.totalTodos = this.uncompletedTodos
    },
    showbuttonDeleteAll() {
      var len = this.totalTodos.length
      var check = true
      for(let i = 0; i < len; i++) {
        if(this.totalTodos[i].completed == false) {
          this.click = false
          check = false
          break
        }
      }
      if(check) {
        this.click = true
      }
    }
  }

}
</script>

<style>
body {
  background: #F2F2F2;
  margin: 0px;
}
  .home_todo {
    /* background: red; */
    margin: 40px;
    display: block;
    
  }
  .home_todo input[type="text"] {
    width: 100%;
    border: 1px solid #D8D8D8;
    background: white;
    padding: 15px;
    box-sizing: border-box;
    /* color: #848484; */
  }
  .home_todo input[type="text"]:hover {
    border: 1px solid #00FFFF; 
  }
  .home_todo input[type="text"]:focus {
    border: 1px solid #00FFFF;
    outline: none;
  }
  .show {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    /* place-items: bottom; */
  }
  .show p {
    border: 0px;
    border-right: 1px solid #585858;
    padding: 0px 15px;
    color: #585858;
  }
  .show p:hover {
    cursor: pointer;
  }
  .list_todo  {
    list-style: none;
    padding-left: 0px;
    margin: 0px;
    font-size: 13px;
  }
  .list_todo .content {
    padding: 0px 10px;
    text-align: left;
    width: 77%;
    text-align: left;
  }
  .list_todo .btn {
    width: 18%;
  }
  .list_todo input {
    width: 5%;
  }
  .list_todo .btn button {
    border: 1px solid #848484;
    padding: 5px 10px;
  }
  .list_todo .btn button:hover {
    color: #00BFFF;
    cursor: pointer;
  }
  .list_todo li {
    background: white;
    margin-bottom: 20px;
    padding: 20px;
    color: #848484;
    display: flex;
    justify-content: space-between;
  }
  .clickAll{
    /* background: white; */
    display: flex;
    /* float: right; */
    justify-content: flex-end;
  }
  .clickAll label:hover {
    cursor: pointer;
  }
  .clickAll input {
    display: inline-flex;
    
  }
  .cusor {
    cursor: no-drop!important;
  }
  .Allblue, .Uncomblue, .Comblue {
    color:#00BFFF!important;
  }
  .clickAll button {
    color: white;
    background: #0080FF;
    border: 0;
    padding: 5px;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
    outline: none;
  }
</style>