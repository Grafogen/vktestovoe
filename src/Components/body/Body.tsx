import React, {ChangeEvent, useState} from 'react';
import S from './body.module.css'
import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import {Loader} from "../loader/Loader";
import {RootObject} from "../../utils/dataTypes";
import {Pagination} from "@mui/material";
import {SmallCard} from "../smallcard/SmallCard";
import Card from "../card/Card";


const Body = (): JSX.Element => {
    const [open, setOpen] = useState(true)
    const [ind, setInd] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(2)

    const {isPending, error, data} = useQuery<RootObject>({
        queryKey: ['repoData'],
        queryFn: async () => {
            const {data} = await axios.get(`https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=криминал&type=movie`, {headers: {'X-API-KEY': 'EWQ3PVZ-FNPMKP5-HYHMV87-Q4EQS0S'}})
            return data
        }
    })

    if (isPending)
        return (<Loader/>)

    if (error) return <h1>'An error has occurred: ' + error.message</h1>
    console.log("data", data)

    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage
    const currentPosts = data.docs.slice(firstPost, lastPost)

    const PageChanger = (event: any, page: number) => {
        setCurrentPage(page)
    }

    const pageCounts = data.docs.length / postPerPage
    const handler = (i:number) => {
        setInd(i+currentPage*postPerPage-2)
        setOpen(!open)
    }
    const cardHandler = () => {
        setOpen(!open)
    }

    return (
        <div className={S.body}>

            <div className={S.container}>
                {open ? <>
                        <h1 className={S.h1}>Лучшие фильмы</h1>
                        <Pagination color={'primary'} count={pageCounts} page={currentPage}
                                    onChange={(e, page) => PageChanger(e, page)}/>

                        <div className={S.cards}>
                            {currentPosts.map((t, i) => {
                                return (
                                    <SmallCard key={i} keyInd={i} data={t} onChangeHandler={handler}/>
                                )
                            })}
                        </div>
                    </>
                    : <Card data={data.docs[ind]} handler={cardHandler}/>
                }
            </div>

        </div>
    );
};

export default Body;