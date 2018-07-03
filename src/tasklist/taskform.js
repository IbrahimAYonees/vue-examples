let TaskForm = {
    data () {
        return {
            form: {
                body: null
            }
        }
    },
    template: `
        <form action="#" @submit.prevent="addTask">
            <div class="input__group">
                <textarea cols="30" rows="6" v-model="form.body"></textarea>
            </div>
            <button type="submit">Add task</button>
        </form>
    `,
    methods: {
        addTask () {
            if (!this.form.body) {
                return;
            }

            bus.$emit('task:added', {
                id: Date.now(),
                body: this.form.body,
                done: false
            });

            this.form.body = null;
        }
    }
};
