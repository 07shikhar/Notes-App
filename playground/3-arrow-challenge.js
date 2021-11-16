const { threadId } = require("worker_threads")

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    incompleteTask(){
        const fil = this.tasks.filter((task)=>{
            return task.completed === false
        })
        return fil
    }
    
}
console.log(tasks.incompleteTask())