import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

import Spinner from "../components/Spinner/Spinner";


export const FullPizza: React.FC = () => {
    const [data, setData] = useState<{
        image: string,
        title: string,
        price: number
    }>();
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPizza() {
            try {
                const res = await axios.get(`https://6a56e354b17de7bebbde971d.mockapi.io/items/${id}`);
                setData(res.data);
            } catch (error) {

                console.log(error);
                alert('Failed to fetch pizza data!')
                navigate('/')
            }
        }
        fetchPizza();
    }, [])

    if (!data) {
        return <Spinner />
    }

    return <div className="container single-pizza-block">
        <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="pizza" />
        <div className="single-pizza-block-info">
            <h2>{data.title}</h2>
            <h4>від {data.price} ₴</h4>
        </div>
    </div>
}
