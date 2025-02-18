import axios from "axios";

const API_URL = 'https://servicesjmk-backend-production.up.railway.app:8080/enviar-correo';

// Enviar formulario
export const sendForm = async (formData) => {

    try {
        const response = await axios.post(`${API_URL}`, formData, {
            headers: {
                "Content-Type": "application/json",
            }
        }

        );
    return response.data;
    } catch (error) {
        throw new Error(error.message ? error.message.response.data.message : error.message);
    }
};