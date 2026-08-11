import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className='skeleton'
        speed={2}
        width={580}
        height={580}
        viewBox="0 0 580 580"
        backgroundColor="#c2c2c2"
        foregroundColor="#ecebeb"
    >
        {/* картинка */}
        <rect x="0" y="0" rx="10" ry="10" width="580" height="360" />

        {/* заголовок, 2 строки */}
        <rect x="10" y="392" rx="4" ry="4" width="440" height="20" />
        {/* <rect x="10" y="422" rx="4" ry="4" width="300" height="20" /> */}

        {/* пилюли: тип теста */}
        <rect x="10" y="430" rx="20" ry="20" width="130" height="40" />
        <rect x="150" y="430" rx="20" ry="20" width="150" height="40" />

        {/* пилюли: размер */}
        <rect x="10" y="480" rx="18" ry="18" width="90" height="36" />
        <rect x="110" y="480" rx="18" ry="18" width="90" height="36" />
        <rect x="210" y="480" rx="18" ry="18" width="90" height="36" />

        <rect x="10" y="545" rx="8" ry="8" width="90" height="24" />
        {/* кнопка "Додати" — круглая справа снизу */}
        <rect x="450" y="530" rx="20" ry="20" width="120" height="40" />
    </ContentLoader>
)

export default Skeleton