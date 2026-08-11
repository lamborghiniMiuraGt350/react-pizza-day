import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSort } from "../redux/slices/filter/filterSlice";
import { SortPropertyEnum, Sort as SortPr } from "../redux/slices/filter/types";



type SortItem = {
    name: string;
    sortProperty: SortPropertyEnum;
}

export const sortList: SortItem[] = [{
    name: 'популярністю (з високої)',
    sortProperty: SortPropertyEnum.RATING_DESC
},
{
    name: 'популярністю (з низької)',
    sortProperty: SortPropertyEnum.RATING_ASC
},
{
    name: 'ціною (в > н)',
    sortProperty: SortPropertyEnum.PRICE_DESC
},
{
    name: 'ціною (н > в)',
    sortProperty: SortPropertyEnum.PRICE_ASC
}, {
    name: 'алфавітом (A - Я)',
    sortProperty: SortPropertyEnum.TITLE_DESC
}, {
    name: 'алфавітом (Я - А)',
    sortProperty: SortPropertyEnum.TITLE_ASC
}];

type SortProps = {
    value: SortPr;
}
export const Sort: React.FC<SortProps> = React.memo(({ value }) => {
    const sortRef = useRef<HTMLDivElement>(null);

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);


    const onClickListItem = (obj: SortItem) => {
        // onClickSort(obj);
        dispatch((setSort(obj)));
        setOpen(false);
    }

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            // if (!(e.composedPath().includes(sortRef.current as EventTarget))) {
            //     setOpen(false)
            // }
            if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleClick)

        return () => {
            document.body.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className="sort" ref={sortRef}>
            <div className={open ? 'sort__label active-label' : 'sort__label'}>
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортування за:</b>
                <span onClick={() => setOpen(open => !open)}>{value.name}</span>
            </div>

            {open && <div className="sort__popup">
                <ul>
                    {sortList.map((item, i) => <li onClick={() => onClickListItem(item)} key={i} className={value.sortProperty === item.sortProperty ? 'active' : ''}>{item.name}</li>)}
                </ul>
            </div>}
        </div>
    );
})