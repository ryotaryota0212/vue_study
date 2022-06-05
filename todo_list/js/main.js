const app = Vue.createApp({
    data: () => ({
        newTask: '',
        todos: []
    }),
    methods: {
        addTask: function(event) {
            // console.log('clicked!')
            if (this.newTask === '') return
            let todo = {
                task: this.newTask,
                isDone: false
            }
            this.todos.push(todo)
            this.newTask = ''
        },
        deleteTask: function(index) {
            this.todos.splice(index, 1)
        }
    }
})
app.mount('#app')