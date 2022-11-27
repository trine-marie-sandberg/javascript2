//1. Register an account
const API_BASE_URL = "http://nf-api.onrender.com";
const apiRegisterUrl = "api/v1/social/auth/register";

async function registerUser(url, userData) {
    console.log(url, userData)
    try {
        //
    } catch (error) {
        console.log(error);
    };
};

const userToRegister = {
    name: "Anton_Hollerudhagen",
    email: "anton.email@hollerudhagen.com",
    password: "blackLab10"
};

const registerUrl = `${API_BASE_URL}/${apiRegisterUrl}`;

registerUser(registerUrl, userToRegister);

///