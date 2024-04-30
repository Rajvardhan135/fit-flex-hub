import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

export const registerUser = async (email, username, password) => {
    try {
        await client.post("/user/register/", {
            email: email,
            username: username,
            password: password,
        });
        const loginResponse = await client.post("/user/login/", {
            username: username,
            password: password,
        });
        return loginResponse.data.username;
    } catch (error) {
        console.error('Error registerring user:', error);
        return null;
    }
};

export const loginUser = async (username, password) => {
    try {
        const loginResponse = await client.post("/user/login/", {
            username: username,
            password: password,
        });
        console.log('username: ' + loginResponse.data.username)
        return loginResponse.data.username;
    } catch (error) {
        console.error('Error while logging in:', error);
        return null;
    }
}

export const logout = async () => {
    try {
        await client.post('/user/logout/');
    } catch (error) {
        console.error('Error while logging out:', error);
    }
}

export const likeExercise = async (exerciseId, username) => {
    console.log(exerciseId, username);
    try {
        const response = await client.post("/user/like_exercise/", {
            exerciseId: exerciseId,
            username: username,
        });
        console.log(response.data); // Log the response data if needed
    } catch (error) {
        console.error('Error while liking exercise:', error);
    }
}

export const unlikeExercise = async (exerciseId, username) => {
    console.log(exerciseId, username);
    try {
        const response = await client.post("/user/unlike_exercise/", {
            exerciseId: exerciseId,
            username: username,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error while liking exercise:', error);
    }
}

export const getLikedExercise = async (username) => {
    try {
        const response = await client.get('/user/get_liked_exercise/', {
            params: { username: username }
        });
        return response.data.liked_workout;
    } catch (error) {
        console.error('Error fetching liked exercises:', error);
        return null;
    }
};

export const getProgress = async (username) => {
    try {
        const response = await client.get('/user/get_progress/', {
            params: { username: username }
        });
        return { calories: response.data.calories, hrs: response.data.hrs };
    } catch (error) {
        console.error('Error fetching liked exercises:', error);
        return null;
    }
};

export const updateProgress = async (username, cal, hrs) => {
    try {
        const response = await client.post("/user/update_progress/", {
            calories: cal,
            hrs: hrs,
            username: username,
        });
        console.log(response.data); // Log the response data if needed
    } catch (error) {
        console.error('Error while liking exercise:', error);
    }
}
