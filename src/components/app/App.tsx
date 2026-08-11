import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../Header";
import { Home } from "../../Pages/Home";
import { Cart } from "../../Pages/Cart";
import { NotFound } from "../../Pages/NotFound";
import { FullPizza } from "../../Pages/FullPizza";
import MainLayout from "../../layouts/MainLayout";

// export const SearchContext = createContext()

export function App() {
    // const [searchValue, setSearchValue] = useState('')


    return (
        <>
            {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}> */}
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="" element={<Home />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="pizza/:id" element={<FullPizza />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
            {/* </SearchContext.Provider> */}
        </>)

}
