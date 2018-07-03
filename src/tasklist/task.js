let Task = {
    props: [
        'task'
    ],
    template: `
        <div class="task" :class="{ 'task--done': task.done }">
            {{ task.body }}
            <a href="#" @click.prevent="toggleDone(task.id)">Mark {{ task.done ? 'not done' : 'done' }}</a>
            <a href="#" @click.prevent="deleteTask(task.id)">Delete</a>
        </div>
    `,
    methods: {
        toggleDone (taskId) {
            bus.$emit('task:toggleDone', taskId);
        },
        deleteTask (taskId) {
            bus.$emit('task:deleted', taskId);
        }
    }
};
