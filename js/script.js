Vue.config.devtools = true;

new Vue (
    {
        el: '#app',
        data: {
            todo: [
                'Comprare il latte',
                'Fare i compiti',
                'Ricevere log-in bonus',
                'Fare giro in bici',
                'DORMIRE!!!'
            ],

            addToList: '',
        },

        methods: {
            add: function() {

                if(this.addToList === '') {
                    return;
                }
                this.todo.push(this.addToList);
                document.getElementsByClassName('todo')[0].style.display = 'block';
                this.addToList = '';
                document.getElementById('more').focus();
            },

            remove: function(index) {
                this.todo.splice(index, 1);
                if (this.todo.length === 0) {
                    document.getElementsByClassName('todo')[0].style.display = 'none';
                }
            }
        },
    }
)