import React from 'react';
import s from './card.module.css'
import { RootObjectDocs} from "../../utils/dataTypes";

type PropsType = {
    data: RootObjectDocs,
    handler:()=>void
}

const Card = (props: PropsType) => {
    const {data,handler} = props
    return (
        <div>
            <button onClick={handler}> Назад</button>
            <section className={s.section}>
                <div className={s.text}>
                    <h1>
                        {data.name}
                    </h1>
                    <div>
                        {data.description}
                    </div>
                    <p>Жанр: {data.genres.map(t => ` ${t.name}`)} </p>
                    <p>Длительность серий: {data.movieLength} мин</p>
                    <p>Рейтинг: {data.rating.imdb} </p>
                    <p>Страна: {data.countries.map(t => `${t.name} `)} </p>
                </div>
                <div className={s.image}>
                    <img src={data.poster.url}/>
                </div>
            </section>

        </div>
    );
};

export default Card;