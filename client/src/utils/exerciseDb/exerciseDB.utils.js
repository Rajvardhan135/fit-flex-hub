import axios from "axios"

const client = axios.create({
    baseURL: "https://exercisedb.p.rapidapi.com/exercises",
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': '',
    }
});

export const getExerciseByBodyPart = async (bodyPart) => {
    try {
        if (bodyPart) {
            const url = `/bodyPart/${bodyPart.toLowerCase()}`;
            const response = await client.get(url);
            return response.data;
        }
        else return [];
    } catch (error) {
        return [];
    }
}

export const getExerciseById = async (exerciseId) => {
    try {
        if (exerciseId) {
            const url = `/exercise/${exerciseId}`;
            const response = await client.get(url);
            return response.data;

        } else return [];
    } catch (error) {
        return [];
    }
}

// https://exercisedb.p.rapidapi.com/exercises/bodyPart/Back
// https://exercisedb.p.rapidapi.com/exercises/bodyPart/back