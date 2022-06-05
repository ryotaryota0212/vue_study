const app = Vue.createApp({
    data: () => ({
        message: 'asddc',
        number: 0,
        url: 'https:/google.com',
        basePrice: 100,
        km: 0,
        m: 0
    }),
    methods: {
        clickHandler: function(event) {
            this.message = this.message.split('').reverse().join('')
        }
    },
    computed: {
        reversedMessage: function() {
            return this.message = this.message.split('').reverse().join('')
        },

        taxPrice: {
            get: function() {
                return this.basePrice * 1.1
            },
            set: function(value) {
                this.basePrice = value / 1.1
            }
        }
    },
    watch: {
        message: function(newValue, oldValue) {

        },
        km: function(value) {
            this.km = value
            this.m = value * 1000
        },
        m: function(value) {
            this.m = value
            this.km = value / 1000
        }
    }
})
app.mount('#app')