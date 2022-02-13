import {useEffect} from "react";
import {useLang} from "../Providers/LangProvider/LangProvider";

const useClosureFetch = (url) => {
  const BASE_URL = url || process.env.REACT_APP_BASE_URL + "/api/";
  const myAbortController = new AbortController();
  const lang = useLang()


  useEffect(() => {
    return () => myAbortController.abort();
  }, []);

  async function fetch(url,options={}) {
    options.signal = myAbortController.signal
    options.header = {...options.header,lang:lang}
    try {
      return await fetch(BASE_URL + url, options)
    } catch (err) {
      console.log(err);
    //   throw err;
    }
  }

  return fetch;
};

export default useClosureFetch;
