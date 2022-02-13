import React from "react";
import Langs from "./data";
const LangContext = React.createContext();
const LangContextSetState = React.createContext();

function LangProvider({ children }) {
  const [Lang, setLang] = React.useState("fa");
  const [Language, setLanguage] = React.useState(Langs["fa"]);

  return (
    <LangContext.Provider value={{ Lang, Language }}>
      <LangContextSetState.Provider value={{ setLang, setLanguage }}>
        {children}
      </LangContextSetState.Provider>
    </LangContext.Provider>
  );
}

function UseLangSetState() {
  const setLang = React.useContext(LangContextSetState);

  if (setLang === undefined) {
    throw new Error("render <LangProvider /> at top of the tree");
  }
  return setLang;
}

function setLang() {
  const { setLang, setLanguage } = UseLangSetState();
  const Lang = (input) => {
    setLang((prevLang) => (prevLang = input));
    setLanguage((prevLang) => (prevLang = Langs[input]));
  };

  return Lang;
}

function useLang() {
  const Lang = React.useContext(LangContext)["Lang"];
  if (Lang === undefined) {
    throw new Error("render <LangProvider /> at top of the tree");
  }
  return Lang;
}

function useLanguage() {
  const Language = React.useContext(LangContext)["Language"];
  if (Language === undefined) {
    throw new Error("render <LanguageProvider /> at top of the tree");
  }

  return Language;
}

export { useLanguage, useLang, setLang };
export default LangProvider;
