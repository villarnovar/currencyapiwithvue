new Vue({
    el: "#root",
    data:{
        principal: " ",
        rate: " ",
        time: " ", 
        interest: " "
    },

    methods: {
        calculate: function(){
            this.interest = (this.principal * this.rate * this.time) / 100;
            this.interest = this.interest.toFixed(2)

        }
    }
});
