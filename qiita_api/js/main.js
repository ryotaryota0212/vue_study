const app = Vue.createApp({
    data: () => ({
        items: null,
        keyword: '',
        message: ''
    }),
    watch: {
        keyword: function(newKey, oldKey) {
            this.message = 'waiting for you to stop typing'
            this.debouncedgetapi()
        }
    },
    mounted: function() {
        // this.keyword = 'js'
        // this.getapi()
        this.debouncedgetapi = _.debounce(this.getapi, 1000)
    },
    methods: {
        getapi: function() {
            if (this.keyword === '') {
                this.items = null
                return
            }

            this.message = 'loading'
            const vm = this
            const params = { page: 1, per_page: 20, query: this.keyword }
            axios.get('https://qiita.com/api/v2/items', { params })
                .then(function(response) {
                    // console.log(response)
                    vm.items = response.data

                })
                .catch(function(error) {
                    vm.message = 'error!' + error
                })
                .finally(function() {
                    vm.message = ''
                })
        }

    }
})
app.mount('#app')