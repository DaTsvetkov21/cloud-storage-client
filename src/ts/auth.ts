async function auth(data = {}) {
    const response = await fetch('https://6a85ad1f-4a47-48c7-968d-4cee292927f5.mock.pstmn.io/auth', {
        method : 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers : {
            'Content-Type' : 'application/json',
            'x-mock-match-request-body' : 'true'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
    return await response.json()
}
auth({"email" : "Cloud@mail.ru", "password" : "Storage"})
    .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
    });