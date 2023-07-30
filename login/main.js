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



const file = "file:///E:/New%20folder%20(2)/student-dashboard-v3-srm-with-login/login/login.html";
const destination = "http://127.0.0.1:5501/login/login.html";

async function transferFile() {
    const response = await fetch(file);
    const data = await response.text();

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", destination);
    xhr.setRequestHeader("Content-Type", "text/html");
    xhr.send(data);
}

transferFile();

const form = document.querySelector('.form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const myButton = document.querySelector('.myButton');


async function getdata() {
    const url = `https://script.google.com/macros/s/AKfycbzx8H-FSFyj8P5VMxSx5n47ddnurdrbuhCXHr0VEN5ZjbferzGecElgJdEv9mdX3l2X/exec`;
    response = await fetch(url);
    data = await response.json();
    return data;
}

myButton.addEventListener('click', async () => {
    var users = await getdata();

    users.forEach((user) => {
        console.log(user.Username + "  " + user.Password);
        console.log(username.value + "  " + password.value);
        if (username.value === user.Username && password.value == user.Password) {

            // alert('Done!');
            window.location.href = "http://127.0.0.1:5501/SRM.html";

        }

    });


});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getdata();
});


