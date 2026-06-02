import axios from "axios";

const pythonBackendURL = import.meta.env.VITE_PYTHON_BACKEND_URL;
const emailServiceURL = import.meta.env.VITE_EMAIL_SERVICE_URL;

const api = axios.create({
  withCredentials: true, // send cookies for JWT
  headers: { "Content-Type": "application/json" },
});

export const sendChatMessage: (message: string) => Promise<string> = async (
  message,
) => {
  try {
    const response = await api.post(`${pythonBackendURL}/chat`, { message });
    return response.data.reply;
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
};

export const sendContactEmail: (formData: any) => Promise<any> = async (
  formData,
) => {
  try {
    const response = await api.post(emailServiceURL, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
};
