'use strict';


Vue.component('to-do-list',{
    template:
    `<div>
        <input type = 'text' v-model='toDoName' />
    <button type="submit" @click = 'addToDoItem'>Добавить</button>
  
    <ul>
        <li v-for='(item, index) in filterList' :key='index'>{{item}}  <button type="submit" @click='deleteItem(index)'>Удалить</button></li>

        <input type = 'text' placeholder="Фильтр" v-model='filterText' />
    </ul>
        
    </div>
    
    `,
    data(){
        return{
            toDoList:['list 2', 'list 3', 'list 3'],
            toDoName:'',
            filterText:'',
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

    computed: {
      filterList() {
        if(this.filterText){
             return this.toDoList.filter((item) => item.includes(this.filterText));
        } else{
            return this.toDoList;
        }
       
      },
    },
    


})
new Vue({
    el:'#app',
    data:{}
})