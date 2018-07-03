let Results = {
    props: [
        'answeredQuestions'
    ],
    template: `
                    <div class="results">
                        <h2>Results</h2>
                        <p>
                            You got {{ correctAnswerCount }} out of {{ answeredQuestions.length }} question correct
                        </p>
                        <div class="results__item" v-for="answered in answeredQuestions">
                            <h3>{{ answered.question.title }}</h3>
                            <p>
                                Your answer: <span :class="{ 'danger' : !answered.answer.correct, 'success': answered.answer.correct }">{{ answered.answer.title }}</span>
                            </p>
                            <p v-if="!answered.answer.correct">
                                Correct answer: {{ getCorrectAnswerFromQuestion(answered.question).title }}
                            </p>
                        </div>
                    </div>
                `,
    computed: {
        correctAnswerCount () {
            return this.answeredQuestions.filter((question) => {
                return question.answer.correct;
            }).length
        }
    },
    methods: {
        getCorrectAnswerFromQuestion (question) {
            return question.answers.find((answer) => {
                return answer.correct === true;
            })
        }
    }
};
