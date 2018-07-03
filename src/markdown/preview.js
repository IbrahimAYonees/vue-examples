let Preview = {
    props: [
        'text'
    ],
    template: `<div class="editor__preview" v-html="markdownText"></div>`,
    computed: {
        markdownText () {
            return marked(this.text, { sanitize: true });
        }
    }
};