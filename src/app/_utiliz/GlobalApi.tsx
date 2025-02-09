import axios from "axios";


const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
});


const getProdcutByAsin = (amazon_domain:string,asin:string) => 
  axiosClient.get(`?api_key=${process.env.NEXT_PUBLIC_API_KEY}&amazon_domain=${amazon_domain}&asin=${asin}&type=product`)

const GlobalApi = {
  getProdcutByAsin,
};

export default GlobalApi;
