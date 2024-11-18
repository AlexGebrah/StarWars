import {createContext} from "react";
import {SWContextValue} from "./types_d.ts";

export const SWContext = createContext<SWContextValue>({
    page: 'Home',
    changePage: (page: string) => console.log(page)
});