import { Link } from "react-router-dom";
import empty from '../assets/img/empty-cart.png'
import React from "react";
export const CartEmpty: React.FC = () => {
    return <div> <div className="cart cart--empty">
        <h2>Кошик порожній <span>😕</span></h2>
        <p>
            Найімовірніше, ви не замовляли ще піцу.<br />
            Щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={empty} alt="Empty cart" />
        <Link to="/" className="button button--black">
            <span>Повернутись назад</span>
        </Link>
    </div></div>
}
