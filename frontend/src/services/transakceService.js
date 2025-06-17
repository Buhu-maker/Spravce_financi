import axios from 'axios';

// Adresa backendu – pokud běží na localhostu:
const API_URL = 'http://localhost:8080/api/transakce';

// Získání všech transakcí z backendu
export const ziskejTransakce = () => {
  return axios.get(API_URL);
};

// Přidání nové transakce
export const pridejTransakci = (novaTransakce) => {
  return axios.post(API_URL, novaTransakce);
};

// Smazání transakce podle ID
export const smazTransakci = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
