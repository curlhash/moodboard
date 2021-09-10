import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

import { Button, Card, CircularProgress, Drawer, Fade, Grid } from '@material-ui/core'

import EmotionCarousel from './emotionCarousel'

const MoodHome = () => {
    const [activeEmo, setActiveEmo] = useState({ text: '', color: null})
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [prevBgColor, setPrevBgColor] = useState('')
    const [emoColorTimer, setEmoColorTimer] = useState(null)
    const [videoId, setVideoID] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (activeEmo.text) {
            if (emoColorTimer) {
                clearTimeout(emoColorTimer as any)
            }
            setEmoColorTimer(setTimeout(() => {
                setEmoColorTimer(null)
                setPrevBgColor(activeEmo.color || '')
            }, 500) as any)
        }
    }, [activeEmo])
    const handleSwoosh = () => {
        setDrawerOpen(true)
        getVideoId()
    }
    const getVideoId = async () => {
        setLoading(true)
        const response = await fetch(`https://script.google.com/macros/s/AKfycbx5FRI9qXSnQrsH_eU0c6OiBQqIUjg5N4m5f966jTWqu5VNiPQYIMd0OmOiqlNfzH3_zA/exec?emo=${activeEmo.text}`)
        const data = await response.json()
        if (data?.id) {
            setVideoID(data.id)
            setLoading(false)
        }
    }
    return <Grid style={{
        height: '100vh',
        background: prevBgColor //'linear-gradient(to right top, #070707, #191919, #262626, #343434, #434343)'
    }} container justify='center' alignItems='center'>
        <Fade timeout={500} in={!!activeEmo.text}><div style={{
            backgroundImage: activeEmo?.color || '',
            width: '100%',
            height: '100%',
            position: 'absolute'
        }}></div></Fade>
        <Grid style={{
            height: '70vh',
            zIndex: 1
        }} item container alignItems='center' justify='center' xs={12}>
            <h1 style={{
                fontFamily: `'Oleo Script', cursive`,
                color: 'white',
                fontSize: 50
            }}>Mood Board</h1>
            <Grid item container xs={12}>
                <EmotionCarousel changeActiveEmotion={setActiveEmo} />
            </Grid>
            <Button onClick={handleSwoosh} style={{
                    border: '1px solid white',
                    borderRadius: 30,
                    color: 'white',
            }} variant="outlined">
                    Swoosh!
                </Button>
        </Grid>
        <Drawer anchor='bottom' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Grid item container justify='center' xs={12}>
            <Card style={{
                height: '80vh',
                width: '100%',
                padding: 10
            }}>
                <Grid item container justify='center' xs={12}>
                <Button style={{
                    border: '1px solid black',
                    borderRadius: 30,
                    marginBottom: 10
            }} variant="outlined" onClick={() => setDrawerOpen(false)}>Close</Button>
                </Grid>
                <Grid style={{
                    minHeight: '400px',
                    position: 'relative'
                }} item xs={12}>
                {
                    loading === true && <p style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}> Creating your moodboard...</p> || <YouTube videoId={videoId} opts={{
                        width: '100%',
                        height: '700px'
                    }} />
                }
                </Grid>
                </Card>
            </Grid>
        </Drawer>
    </Grid>
}

export default React.memo(MoodHome)