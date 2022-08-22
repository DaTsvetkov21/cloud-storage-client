
export default {
    data: () => ({
        textform: 'Sing up',
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
    })
}

