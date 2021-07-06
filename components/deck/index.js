import { useState, useEffect } from 'react';
import Card from './../card'

const Deck = ({ className, children, title, path, flipped, cardsToShow }) => {



    return <div className={['deck', className].filter(Boolean).join('')}>
         {(cardsToShow.length === 0) ?
         <div>Loading...</div> :
         <>
            {children}
            <div className='deck-cards'>{ cardsToShow.map((card, key) =>{
                const number = card.slice(0, -1)
                const symbol = card.slice(-1)
                const isFlipped = parseInt(flipped) > key

                return <Card  flipped={isFlipped} number={number} symbol={symbol} key={key} />
            })}</div>
         </>
         }
     </div>
}

export {
    Deck
}