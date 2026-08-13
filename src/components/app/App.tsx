import { createContext, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../Header";
import { Home } from "../../Pages/Home";
// import  Cart  from "../../Pages/Cart";
// import NotFound  from "../../Pages/NotFound";
// import { FullPizza } from "../../Pages/FullPizza";
import MainLayout from "../../layouts/MainLayout";
import Spinner from "../Spinner/Spinner";

const Cart = lazy(() => import("../../Pages/Cart"));
const NotFound = lazy(() => import("../../Pages/NotFound"));
const FullPizza = lazy(() => import("../../Pages/FullPizza"));
const Order = lazy(() => import("../../Pages/Order"));

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
                        <Route path="cart" element={<Suspense fallback={<Spinner />}><Cart /> </Suspense>} />
                        <Route path="pizza/:id" element={<Suspense fallback={<Spinner />}><FullPizza /> </Suspense>} />
                        <Route path="order" element={<Suspense fallback={<Spinner />}><Order /> </Suspense>} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div >
            {/* </SearchContext.Provider> */}
        </>)

}
