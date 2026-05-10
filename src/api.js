// Add your API Key inside quotations in API_KEY variable:
const API_KEY = 'YOUR_API_KEY'; 
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

export const fetchCurrencyList = async () => {
  try {
    const response = await fetch(`${BASE_URL}/codes`);
    const data = await response.json();
    
    const formattedCodes = {};
    data.supported_codes.forEach(([code, name]) => {
      formattedCodes[code] = name;
    });
    
    return formattedCodes;
  } catch (error) {
    console.error("List Fetch Error:", error);
    throw error;
  }
};

export const fetchConversion = async (from, to, amount) => {
  try {
    const response = await fetch(`${BASE_URL}/pair/${from}/${to}/${amount}`);
    const data = await response.json();
    return data.conversion_result; 
  } catch (error) {
    console.error("Conversion Fetch Error:", error);
    throw error;
  }
};

export const fetchAllRates = async (baseCurrency) => {
  try {
    const response = await fetch(`${BASE_URL}/latest/${baseCurrency}`);
    const data = await response.json();
    return data.conversion_rates; 
  } catch (error) {
    console.error("All Rates Fetch Error:", error);
    throw error;
  }
};