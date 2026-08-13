import { Link } from "react-router-dom";

function Order() {
    return (<div>
        <div className="not-found__block">
            <img src={`${process.env.PUBLIC_URL}/done.png`} alt="pizza" />
            <br />
            <h1>Замовлення оформлено! <span>🎉</span></h1>
            <p>
                Дякуємо за замовлення!<br />
                Наш менеджер зв'яжеться з вами найближчим часом,<br />
                щоб уточнити деталі доставки.
            </p>
        </div>
        <Link to="/" className="button button--outline button--add go-back-btn order-btn">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 12.75L0.75 6.68015L6.61175 0.75" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Повернутися назад</span>
        </Link>
    </div>)
}
export default Order;