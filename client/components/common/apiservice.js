// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://192.168.6.81:3000/api';

export const fetchDiseaseData = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/casuality/predictdisease`);
    // console.log(response)
    return response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMedsData = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/casuality/predictmeds`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
