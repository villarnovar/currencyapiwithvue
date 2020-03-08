new Vue({
    el: '#root',
    data(){
        return{
            rates: {},
            base: null
        }
    },
    created (){
        axios.get("https://api.exchangeratesapi.io/latest")
        .then((response) =>{
            this.rates =response.data.rates
            this.base = response.data
            console.log(this.rates)
        })
    }

});