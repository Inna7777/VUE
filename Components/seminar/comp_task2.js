'use strict';


Vue.component('to-do-list',{
    template:
    `<div>
        <input type = 'text' v-model='toDoName' />
    <button type="submit" @click = 'addToDoItem'>Добавить</button>
  
    <ul>
        <li v-for='(item, index) in toDoList' :key='index'>{{item}}  <button type="submit" @click='deleteItem(index)'>Удалить</button></li>
        
    </div>
    
    </ul>`,
    data(){
        return{
            toDoList:['Первый элемент', 'Второй элемент', 'Третий елемент'],
            toDoName:'',

        }
    },
    methods: {
        addToDoItem(){
            this.toDoList.push(this.toDoName);
            this.toDoName='';
        
        },
        deleteItem(index){
            this.toDoList.splice(index, 1);
        }
    },


})

new Vue({
    el:'#app',
    data:{}
})