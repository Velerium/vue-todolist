Vue.config.devtools = true;

new Vue (
    {
        el: '#app',
        data: {
            todo: [
                'thing',
                'thing',
                'thing',
                'things'
            ],

            addToList: '',
        },

        methods: {
            add: function() {
                if(this.addToList === '') {
                    return;
                }
                this.todo.push(this.addToList);
                this.addToList = '';
                document.getElementById('more').focus();
            },

            remove: function(index) {
                this.todo.splice(index, 1);
            }
        },
    }
)