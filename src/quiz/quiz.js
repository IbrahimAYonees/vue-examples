let Quiz = {
    components: {
        'question': Question,
        'results': Results
    },
    data () {
        return {
            questions: [],
            currentQuestion: null,
            answeredQuestions: [],
            currentQuestionNumber: 1,
            showResults: false
        }
    },
    template: `
                    <div class="quiz">
                        <template v-if="showResults">
                            <results :answeredQuestions="answeredQuestions"></results>
                        </template>
                        <template v-else>
                            <h4>Question {{ currentQuestionNumber }} of {{ questions.length }}</h4>
                            <question
                                v-if="currentQuestion"
                                :question="currentQuestion"
                                v-on:question:answered="storeAnswer"
                                v-on:question:next="setNextQuestion"
                            ></question>
                        </template>
                    </div>
                `,
    mounted () {
        axios.get('questions.json').then((response) => {
            this.questions = response.data;
            this.currentQuestion = this.questions[0];
        })
    },
    methods: {
        setNextQuestion () {
            if (this.allQuestionsAnswered()) {
                this.showResults = true;
                return;
            }

            this.currentQuestionNumber++;
            this.currentQuestion = this.questions[this.currentQuestionNumber - 1];
        },
        allQuestionsAnswered () {
            return this.currentQuestionNumber === this.questions.length;
        },
        storeAnswer (question, answer) {
            this.answeredQuestions.push({
                question: question,
                answer: answer
            });
        }
    }
};
