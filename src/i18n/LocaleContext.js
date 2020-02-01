import { createContext } from "react";

const localeContextInitialState = { locale: "en" };

const LocaleContext = createContext(localeContextInitialState);

export default LocaleContext;
