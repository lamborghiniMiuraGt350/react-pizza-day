import { useContext, useEffect, useState } from "react";

import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import { NotFound } from "./NotFound";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchContext } from "../components/app/App";

import Skeleton from "../components/PizzaBlock/Skeleton";

export function Home() {
    const { searchValue } = useContext(SearchContext);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({ name: 'популярністю (з високої)', sortProperty: 'rating' });
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setIsLoading(true);
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        // const search = searchValue ? `&search=${searchValue}` : '';
        fetch(`https://6a56e354b17de7bebbde971d.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}`)
            .then(data => data.json())
            .then(data => {
                setItems(data)
                setIsLoading(false);
            })
            .catch(e => {
                alert(e);
                console.error(e);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sortType, currentPage])

    const pizzas = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => <PizzaBlock key={item.id} {...item} />);
    const skeleton = [...new Array(6)].map((item, i) => <Skeleton key={i} />);
    return (<>
        <div className="content__top">
            <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} />
            <Sort value={sortType} onClickSort={(index) => setSortType(index)} />
        </div>
        <h2 className="content__title">Усі піци</h2>
        <div className="content__items">
            {isLoading ? (skeleton) : (pizzas.length === 0 ? (<NotFound />) : pizzas)}
        </div>
        {items.length < 4 ? null : (<Pagination currentPage={currentPage} onChangePage={(num) => setCurrentPage(num)} />)}
    </>)
}
