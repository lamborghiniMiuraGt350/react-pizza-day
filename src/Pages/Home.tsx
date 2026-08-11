import React, { useCallback, useContext, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from "react-router-dom";

import { selectFilter, setCategoryId, setCurrentPage } from "../redux/slices/filter/filterSlice";
import { fetchPizzas, selectPizzaData } from "../redux/slices/pizza/pizzasSlice";
import { useAppDispatch } from "../redux/store";

import { PizzaBlock } from "../components/PizzaBlock/PizzaBlock";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import { NotFound } from "./NotFound";
import { Pagination } from "../components/Pagination/Pagination";


import Skeleton from "../components/PizzaBlock/Skeleton";






export const Home: React.FC = () => {
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    // Redux
    // const dispatch = useDispatch();
    const dispatch = useAppDispatch();



    const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
    const { items, status } = useSelector(selectPizzaData);


    const onClickCategory = useCallback((id: number) => {
        dispatch(setCategoryId(id))
    }, [])
    const onChangePage = (num: number) => {
        dispatch(setCurrentPage(num))
    }
    // const { searchValue } = useContext(SearchContext);
    // const [items, setItems] = useState([]);

    const getPizzas = async () => {
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';
        dispatch(
            // @ts-ignore
            fetchPizzas({
                order,
                sortBy,
                category,
                search,
                currentPage: String(currentPage)
            }))

        // fetch(`https://6a56e354b17de7bebbde971d.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${order}`)
        //     .then(data => data.json())
        //     .then(data => {
        //         setItems(data)
        //         setIsLoading(false);
        //     })
        //     .catch(e => {
        //         alert(e);
        //         console.error(e);
        //     });
        window.scrollTo(0, 0);
    }

    //Если был первый рендер, то проверяем url параметры и сохраняет в redux
    // useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(window.location.search.substring(1)) as unknown as SearchPizzaParams;
    //         const sort = sortList.find(obj => obj.sortProperty === params.sortBy)
    //         dispatch(setFilters({
    //             searchValue: params.search,
    //             categoryId: Number(params.category),
    //             currentPage: Number(params.currentPage),
    //             sort: sort || sortList[0]
    //         }))
    //         isSearch.current = true;
    //     }
    // }, [])

    //Если изменили параметры и был первый рендер
    // useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             sortProperty: sort.sortProperty,
    //             categoryId: categoryId,
    //             currentPage: currentPage
    //         })

    //         navigate(`?${queryString}`)
    //     }
    //     isMounted.current = true;

    // }, [categoryId, sort.sortProperty, currentPage])
    //Если был первый рендер, то запрашивем пиццы
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            getPizzas();
        }
        isSearch.current = false;
    }, [categoryId, sort.sortProperty, searchValue, currentPage])
    // const pizzas = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => <PizzaBlock key={item.id} {...item} />);
    const pizzas = items.map((item: any) => <PizzaBlock key={item.id} {...item} />);
    const skeleton = [...new Array(6)].map((item, i) => <Skeleton key={i} />);
    return (<>
        <div className="content__top">
            {/* <Categories value={categoryId} onClickCategory={(index) => setCategoryId(index)} /> */}
            {/* <Sort value={sortType} onClickSort={(index) => setSortType(index)} /> */}

            {/* REDUX */}
            <Categories value={categoryId} onClickCategory={onClickCategory} />
            <Sort value={sort} />
        </div>
        <h2 className="content__title">Усі піци</h2>
        {status === 'error' ? <div className="cart cart--empty">
            <h2>Виникла помилка <span>😣</span></h2>
            <p>
                На жаль, не вдалося отримати піци.<br />
                Спробуйте повторити спробу пізніше.
            </p>
        </div> : <div className="content__items">
            {status === 'loading' ? (skeleton) : (pizzas.length === 0 ? (<NotFound />) : pizzas)}
        </div>}
        {items.length < 4 ? null : (<Pagination currentPage={currentPage} onChangePage={onChangePage} />)}
    </>)
}
