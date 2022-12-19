import React, { useEffect } from 'react'
import useSound from 'use-sound'
import mySound from '../assets/alert-sound.mp3'

export default function PlayAlert() {
    const [play] = useSound(mySound);
    useEffect(() => {
        play()
    })
    // return <button onClick={play}>Boop!</button>;
  return (
    <div></div>
  )
}
