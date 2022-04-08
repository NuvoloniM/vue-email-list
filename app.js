var app = new Vue(
    {
        el: '#root',
        data:{
            emailArray:'',
        },
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    this.emailArray = response.data.response;
                })
        },
        method: {

        }
    }
)