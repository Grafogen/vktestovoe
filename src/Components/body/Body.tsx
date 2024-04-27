import React from 'react';
import S from './body.module.css'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Loader} from "../loader/Loader";
import {RootObject} from "../../utils/dataTypes";
import Card from "../card/Card";
const Body = ():JSX.Element => {

    const {isPending, error, data} = useQuery<RootObject>({
        queryKey: ['repoData'],
        queryFn: async () => {
            const {data} = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал&type=movie`, {headers: {'X-API-KEY':'EWQ3PVZ-FNPMKP5-HYHMV87-Q4EQS0S'}})
            return data
        }
    })

    if (isPending)
        return (<Loader/>)

    if (error) return <h1>'An error has occurred: ' + error.message</h1>
    console.log("data", data)
    console.log("data", data.docs[0].name)

    return (
        <div className={S.body}>
            <h1>Лучшие фильмы</h1>
            {data.docs.map((t, i)=>{
                return(
                    <Card key={i} data={t}/>
                )
            })}

        </div>
    );
};

export default Body;