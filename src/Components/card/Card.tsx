import React from 'react';
import s from './card.module.css'
import { RootObjectDocs} from "../../utils/dataTypes";

type PropsType = {
    data: RootObjectDocs
}

const Card = (props: PropsType) => {
    const {data} = props
    return (
        <div>
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
                <div>
                    <img src={data.poster.url}/>
                </div>
            </section>

        </div>
    );
};

export default Card;