import React, { useEffect, useState } from 'react'

import { Fade, Grid } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import { EMOTIONS_ARR } from './constants'

const EmotionCarousel = ({changeActiveEmotion}: any) => {
    const [active, setActive] = useState(0)
    const [start, setStart] = useState(true)
    const [colorTimer, setColorTimer] = useState(null)
    const [textTimer, setTextTimer] = useState(null)
    useEffect(() => {
        changeActiveEmotion(EMOTIONS_ARR[active])
    }, [])
    const onBackClick = () => {
        if (active > 0) {
            setStart(false)
            changeActiveEmotion({text: '', color: ''})
            if (colorTimer) {
                clearTimeout(colorTimer as any)
            }
            if (textTimer) {
                clearTimeout(textTimer as any)
            }
            setColorTimer(setTimeout(() => {
                setColorTimer(null)
                changeActiveEmotion(EMOTIONS_ARR[active - 1])
            }, 500) as any)
            setTextTimer(setTimeout(() => {
                setTextTimer(null)
                setActive(active - 1)
                setStart(true)
            }, 1000) as any)
        } 
    }
    const onForwardClick = () => {
        if (active < (EMOTIONS_ARR.length - 1)) {
            setStart(false)
            changeActiveEmotion({text: '', color: ''})
            if (colorTimer) {
                clearTimeout(colorTimer as any)
            }
            if (textTimer) {
                clearTimeout(textTimer as any)
            }
            setColorTimer(setTimeout(() => {
                setColorTimer(null)
                changeActiveEmotion(EMOTIONS_ARR[active + 1])
            }, 500) as any)
            setTextTimer(setTimeout(() => {
                setTextTimer(null)
                setActive(active + 1)
                setStart(true)
            }, 1000) as any)
        }
    }
    return <Grid item xs={12} container justify='center' alignItems='center'>
        <div style={{
            cursor: 'pointer',
            pointerEvents: `${textTimer ? 'none' : 'unset'}`,
            width: 50,
            height: 50,
            border: '1px solid white',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }} onClick={onBackClick}>
        <ArrowBackIosIcon style={{
            width: 20,
            paddingLeft: 7,
            fill: 'white',
        }} />
        </div>
        <Fade in={start}>
        <p style={{
            width: 200,
            margin: 10,
            textAlign: 'center',
            fontSize: 35,
            color: 'cyan',
        }}>{EMOTIONS_ARR[active].text}</p>
        </Fade>
        <div style={{
            cursor: 'pointer',
            pointerEvents: `${textTimer ? 'none' : 'unset'}`,
            width: 50,
            height: 50,
            border: '1px solid white',
            borderRadius: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }} onClick={onForwardClick}>
        <ArrowForwardIosIcon style={{
            width: 20,
            fill: 'white',
        }} />
        </div>
    </Grid>
}

export default React.memo(EmotionCarousel)