let Tasks = {
    components: {
        'task': Task,
        'task-form': TaskForm
    },
    data () {
        return {
            tasks: []
        }
    },
    template: `
        <div>
            <div class="tasks">
                <template v-if="tasks.length">
                    <task v-for="task in tasks" :task="task" :key="task.id"></task>
                </template>
                <span v-else>No tasks</span>
            </div>
            <task-form></task-form>
        </div>
    `,
    methods: {
        toggleDone (taskId) {
            let task = this.tasks.find((task) => {
                return task.id === taskId;
            });

            task.done = !task.done;
        },
        deleteTask (taskId) {
            this.tasks = this.tasks.filter((task) => {
                return task.id !== taskId;
            });
        }
    },
    mounted () {
        bus.$on('task:added', (task) => {
            this.tasks.push(task);
        });

        bus.$on('task:toggleDone', (taskId) => {
            this.toggleDone(taskId);
        });

        bus.$on('task:deleted', (taskId) => {
            this.deleteTask(taskId);
        });
    }
};
