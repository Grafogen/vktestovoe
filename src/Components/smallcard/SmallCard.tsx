import React from 'react';
import s from './smallCard.module.css'
import { RootObjectDocs} from "../../utils/dataTypes";

type PropsType = {
    data: RootObjectDocs
}

export const SmallCard = (props: PropsType) => {
    const {data} = props
    return (
        <div className={s.section}>
                <div className={s.image}>
                    <img src={data.poster.url}/>
                </div>
                <div className={s.text}>
                    <h3>
                        {data.name}
                    </h3>
                </div>
        </div>
    );
};

