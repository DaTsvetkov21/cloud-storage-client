
const axios = require('axios').default;

export default {
    data: () => ({
        btn: 'Sing In',
        valid: false,
        password: '',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 3 || 'Password must be more than 3 characters',
        ],
    }),
    methods: {
        singIn: async function () {
            axios.post('https://6a85ad1f-4a47-48c7-968d-4cee292927f5.mock.pstmn.io/auth', {
                email: this.email,
                password: this.password
            },
                {
                    headers: {
                'x-mock-match-request-body': 'true'
                    }
                })
                .then(function (response) {
                    window.localStorage.setItem('token', response.data.token);
                    window.history.pushState("Auth", "Cloud Storage", "/");
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

    singUp: async function (data = {}) {
        console.log('UP')
        const response = await fetch('https://6a85ad1f-4a47-48c7-968d-4cee292927f5.mock.pstmn.io/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-mock-match-request-body': 'true'
            },
            body: JSON.stringify(data)
        });
        return await response.json()
    },

    setValueBtn(btn) {
        this.btn = btn
    }
}
}



