import { createContext, useState } from "react";

import { Header } from "../Header";
import { Home } from "../../Pages/Home";
import { Cart } from "../../Pages/Cart";
import { NotFound } from "../../Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export const SearchContext = createContext()

export function App() {
    const [searchValue, setSearchValue] = useState('')


    console.log(SearchContext);

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </SearchContext.Provider>
        </div>)
}
