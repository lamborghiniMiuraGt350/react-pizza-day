



export function Categories({ value, onClickCategory }) {

    const categories = ['Усі', 'Популярні', 'Новинки', `М'ясні`, 'З морепродуктами', `Без м'яса`]

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => <li key={index} onClick={() => onClickCategory(index)} className={value === index ? "active" : ''}>{item}</li>)}
            </ul>
        </div>
    );
}