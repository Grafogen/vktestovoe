import React from 'react';
import s from './smallCard.module.css'
import { RootObjectDocs} from "../../utils/dataTypes";

type PropsType = {
    data: RootObjectDocs,
    keyInd:number,
    onChangeHandler:(key:number)=>void
}

export const SmallCard = (props: PropsType) => {




    const {data,keyInd, onChangeHandler} = props
    return (
        <div className={s.section}>
                <div className={s.image}>
                    <img  src={data.poster.url}/>
                </div>
                <div className={s.text}>
                    <h3 onClick={e=>onChangeHandler(keyInd)}>
                        {data.name}
                    </h3>
                </div>

        </div>
    );
};

