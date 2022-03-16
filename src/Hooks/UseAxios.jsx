import axios from "axios";
import { useLang } from "../Providers/LangProvider/LangProvider";
import http from "../services/httpServices";

const UseAxios = () => {
  const lang = useLang();
  const customAxios = async (inUrl, method, body = null) => {
    axios.defaults.headers.common["lang"] = lang;
    let baseUrl = process.env.REACT_APP_BASE_URL;
    const url = baseUrl + "/api/" + inUrl;
    const { data } = await http[method](url, JSON.stringify(body));
    return data;
  };
  return customAxios;
};

export default UseAxios;
