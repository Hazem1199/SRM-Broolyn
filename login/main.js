// function signIn() {
//     let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
//     let form = document.createElement('form')
//     form.setAttribute('method', 'POST')
//     form.setAttribute('action', oauth2Endpoint)

//     let params = {
//         "client_id": "768857244422-1b8mje373gjmjsi5hdv7kcatja1roos2.apps.googleusercontent.com",
//         "redirect_uri": "http://127.0.0.1:5501/SRM.html",
//         "response_type": "token",
//         "scope": "https://www.googleapis.com/auth/userinfo.profile",
//         "include_granted_scopes": "true",
//         "clientSecret": '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',
//         'state': 'pass-through-value'
//     }

//     for (var p in params) {
//         let input = document.createElement('input')
//         input.setAttribute('type', 'hidden')
//         input.setAttribute('name', p)
//         input.setAttribute('value', params[p])
//         form.appendChild(input)
//     }
//     console.log();

//     document.body.appendChild(form)
//     form.submit()
// }

const form = document.querySelector('.form');
const username = document.querySelector('#username').value;
const password = document.querySelector('#password');
const myButton = document.querySelector('.myButton');


async function getdata() {
    const url = `https://script.google.com/macros/s/AKfycbzx8H-FSFyj8P5VMxSx5n47ddnurdrbuhCXHr0VEN5ZjbferzGecElgJdEv9mdX3l2X/exec`;
    response = await fetch(url);
    data = await response.json();
    return data;
}

myButton.addEventListener('click', async () => {
    const data = await getdata();
    console.log(data.Name);

    if (data.Name === username && data.Password === password) {
        alert('Done!');
    } else {
        alert('Not done!');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getdata();
});


