import '@fortawesome/fontawesome-free/css/all.css'

export default {
    data(){
        return {
            drawer: false,
            token: localStorage.getItem('token')
        }
    },
    methods: {
      removeToken() {
          localStorage.removeItem('token');
          this.$router.go(0);
      }
    },
    computed:{
        headerButton() {
            return[
                {
                    icon: 'login',
                    title: 'Sing in',
                    route: '/singin'
                },
                {
                    icon: 'lock_open',
                    title: 'Sing up',
                    route: '/singup',

                },
                {
                    icon: 'logout',
                    title: 'Log out',
                    route: '/logout'
                },
            ]
        }
    },

}


