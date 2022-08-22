
export default {
    data: () => ({
        textform: 'Sing in',
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
        auth: async function (data = {}) {
            const response = await fetch('https://6a85ad1f-4a47-48c7-968d-4cee292927f5.mock.pstmn.io/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-mock-match-request-body': 'true'
            },
            body: JSON.stringify(data)
        });
                return await response.json()
            }
    }
}

        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    // }
// }

