<template>
  <div class="home_todo">
    <form @submit="onSubmit">
      <input type="text" v-model="text" placeholder="Type here for add a new todo">
    </form>
    <div class="show">
      <!-- <button>All</button>
      <button>Uncompleted</button>
      <button>Completed</button> -->
      <p>All</p>
      <p>Uncompleted</p>
      <p style="border: 0; padding: 0px 0px 0px 10px; ">Completed</p>
    </div>
    <ul class="list_todo">
      <li v-for="(todo, key) in totalTodos" :key="key">
        <input type="checkbox" :checked="todo.completed">
        <div class="content">
          A Few Seconds Ago
          <p>{{ todo.title }}</p>
        </div>
        <div class="btn">
          <button>Edit</button>
          <button @click="deleteTodos(todo.id)">X</button>
        </div>
        </li>
    </ul>
    <div class="clickAll">
      <input type="checkbox" name="" id="clickAll">
      <label for="clickAll">Mark all as completed</label>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    ...mapGetters(['totalTodos']),
    
  },
  methods: {
    ...mapMutations(['deleteTodo']),
    ...mapActions(['addTodo']),
    deleteTodos(id) {
      this.totalTodos = this.deleteTodo(id)
    },
    onSubmit(event) {
      event.preventDefault()
      this.addTodo({title: this.text})
      this.text = ''
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
  .btn p:hover {
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
</style>