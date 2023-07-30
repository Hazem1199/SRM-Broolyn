function signIn() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
    let form = document.createElement('form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', oauth2Endpoint)

    let params = {
        "client_id": "768857244422-1b8mje373gjmjsi5hdv7kcatja1roos2.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5501/SRM.html",
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes": "true",
        "clientSecret": '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',
        'state': 'pass-through-value'
    }

    for (var p in params) {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', p)
        input.setAttribute('value', params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
}