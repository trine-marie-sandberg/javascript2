//1. Register an account
const API_BASE_URL = "https://nf-api.onrender.com";
const apiRegisterUrl = "/api/v1/social/auth/register";

async function registerUser(url, userData) {
    console.log(url, userData)
    try {

        //2. do api call
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        const json = await response.json();

    } catch (error) {

        console.log(error);
    };
};

const userToRegister = {
    name: "Anton_Hollerudhagen",
    email: "anton.email@hollerudhagen.com",
    password: "blackLab10"
};

const registerUrl = `${API_BASE_URL}${apiRegisterUrl}`;
console.log(registerUrl)

registerUser(registerUrl, userToRegister);

///