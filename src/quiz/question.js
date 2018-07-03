let Question = {
    props: [
        'question'
    ],
    components: {
        'answer': Answer
    },
    data () {
        return {
            showNext: false
        }
    },
    template: `
                    <div class="question">
                        <h3>{{ question.title }}</h3>
                        <answer
                            v-for="answer in question.answers"
                            :answer="answer"
                            :key="answer.id"
                            v-on:answer:chosen="checkAnswer"
                        ></answer>

                        <button v-if="showNext" @click.prevent="nextQuestion">Next</button>
                    </div>
                `,
    methods: {
        checkAnswer (answer) {
            this.showNext = true;
            this.$emit('question:answered', this.question, answer);
        },
        nextQuestion () {
            this.showNext = false;
            this.$emit('question:next');
        }
    }
};
