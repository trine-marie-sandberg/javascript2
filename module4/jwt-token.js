//1. REGISTER USER
const API_BASE_URL = "https://nf-api.onrender.com";

async function registerUser(url, userData) {

    console.log(url, userData)

    try {

        //2. do api call
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        const json = await response.json();
        console.log(json)

    } catch (error) {

        console.log(error);
    };
};

const userToRegister = {
    name: 'anton_hollerudhagen',
    email: 'anton@noroff.no',
    password: 'blackLab10',
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

//registerUser(registerUrl, userToRegister);

//LOGIN USER
const loginEndpoint = "/api/v1/social/auth/login";
const loginUrl = API_BASE_URL + loginEndpoint;

const userToLogin = {
    email: 'anton@noroff.no',
    password: 'blackLab10',
};

async function loginUser(url, userData) {
    //
    try {

        console.log(url, userData)
        const postData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        };

        const response = await fetch(url, postData);
        console.log(response)
        const json = await response.json();
        console.log(json)

        //ACCESS TOKEN
        const accessToken = json.accessToken;
        //ADD TO LOCALSTORAGE
        localStorage.setItem("accessToken", accessToken);

    } catch (error) {
        console.log(error);
    };
};

const allPostsUrl = "/api/v1/social/posts";
const postsUrl = API_BASE_URL + allPostsUrl;

//loginUser(loginUrl, userToLogin);

//REQUEST WITH TOKEN
async function getWithToken(url) {
    //
    try {
        const token = localStorage.getItem("accessToken");
        console.log(token)
        const fetchOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        };

        console.log(url);
        const response = await fetch(url, fetchOptions);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

getWithToken(postsUrl);