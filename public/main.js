const log = document.getElementById("login");
log.addEventListener("submit", loginCheck)
async function loginCheck(event) {
    event.preventDefault();
            
    const endpoint = "/app/login"
    const url = document.baseURI+endpoint

    const formEvent = event.currentTarget

    try {
        const formData = new FormData(formEvent);
        const info = await sendInfo({ url, formData });

        console.log(info);
        console.log("Login Success")
        window.location.href = 'entry_page.html'
    } catch (error) {
        console.log(error);
    }
}
        // Create a data sender
async function sendInfo({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(plainFormData);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}

const log = document.getElementById("new_user");
log.addEventListener("submit", registerUser)
async function registerUser(event) {
    event.preventDefault();
            
    const endpoint = "/app/new_user"
    const url = document.baseURI+endpoint

    const formEvent = event.currentTarget

    try {
        const formData = new FormData(formEvent);
        const info = await sendReg({ url, formData });

        console.log(info);
        console.log("Register Success")
        window.location.href = 'login_page.html'
    } catch (error) {
        console.log(error);
    }
}
        // Create a data sender
async function sendReg({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJson = JSON.stringify(plainFormData);
    console.log(formDataJson);

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: formDataJson
    };

    const response = await fetch(url, options);
    return response.json()
}