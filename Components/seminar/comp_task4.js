'use strict';


Vue.component('products',{
    props: {
      
    },
    
    template:
    `<div>
        <ul>
            <li v-for='item in sortedList' :key='item.id'>{{item.name}}-{{item.price}}</li>
        </ul>
        <button @click='sortDirection="up"' >Up</button>
        <button @click='sortDirection="down"' >Down</button>
        <button @click='sortDirection=""'type="">Сброс</button>
        
        
    </div>`
    
    ,
    data(){
        return{
            products:[
                {
                    id:1,
                    name:"Apple",
                    price: 150,

                },
                {
                    id:2,
                    name:"Orange",
                    price: 110,

                },
                {
                    id:3,
                    name:"Pineapple",
                    price: 250,

                },],
                sortDirection:'',
           
        }
    },
    methods: {
       
    },

    computed: {
        sortedList() {
            const sortProducts = [...this.products];
            switch(this.sortDirection){
                
                case 'up': 
                return sortProducts.sort((a,b)=> a.price -b.price);
                case 'down':
                    return sortProducts.sort((a,b)=> b.price -a.price);
                default:
                    return sortProducts;

            }
          
        },
        
     
    },
    


}),
new Vue({
    el:'#app',
    data:{}
})