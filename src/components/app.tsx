import React from 'react'
import { TweetButton } from './tweet-button'

export const App: React.FC<{}> = () => 
    <>
        <p>Twitter やめろ</p>
        <TweetButton text="Twitter やめろ" url="https://twitter-yamero.vercel.app" />
        <br />
        <a href="https://github.com/iamtakagi/twitter-yamero">https://github.com/iamtakagi/twitter-yamero</a> 
    </>
