let Editor = {
    components: {
        'preview': Preview
    },
    data () {
        return {
            text: ''
        }
    },
    template: `
                    <div class="editor">
                        <textarea class="editor__input" contenteditable="true" v-model="text"></textarea>
                        <preview :text="text"></preview>
                    </div>
                `
};
