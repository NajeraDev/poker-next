import { useState } from 'react';
import classes from './styles.module.scss'

const Card = ({ symbol, number, flipped }) => {

    const isNumber = !isNaN(number);
    const [isFlipped, setIsFlipped] = useState(flipped);

    return <div
    symbol={symbol}
    number={number}
    className={[classes.card, (isFlipped ? classes.flipped : '')].filter(Boolean).join(' ')  }
    onClick={() => setIsFlipped(!isFlipped)}
    >
    <div className={classes.container}>
                            <div className={classes.back}></div>
                            <div className={classes.front}>
                            <div className={[classes["card-corner"],classes["top-left"]].join(' ')}>
                                <div>{number}</div>
                                <div>{symbol}</div>
                              </div>
                              <div className={classes.symbols}>
                                {
                                  number === 'A' ?
                                    <div className={classes.Asymbol}>{symbol}</div> : ""
                                }
                                {
                                  isNumber
                                    ? new Array(parseInt(number))
                                      .fill(symbol)
                                      .map(
                                        (cardSymbol, index) => <div key={index}>{cardSymbol}</div>)
                                    : ""
                                }
                                {
                                  number === 'J' || number === 'Q' || number === 'K' ?
                                    <div className={classes.image}></div>
                                    : ""
                                }
                              </div>
                              <div className={[classes["card-corner"],classes["bottom-right"]].join(' ')}>
                                <div>{number}</div>
                                <div>{symbol}</div>
                              </div>
                            </div>  
                          </div>
    </div>

}

export default Card; 