let Answer = {
    props: [
        'answer'
    ],
    template: `
                    <div class="answer">
                        <label :for="'answer-' + answer.id">
                            <input type="radio" :id="'answer-' + answer.id" name="answer" @click="choose(answer)"> {{ answer.title }}
                        </label>
                    </div>
                `,
    methods: {
        choose (answer) {
            this.$emit('answer:chosen', answer)
        }
    }
};
