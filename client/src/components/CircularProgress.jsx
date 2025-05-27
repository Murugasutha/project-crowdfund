import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import {useSpring, animated} from 'react-spring'

function CircularProgress({value, text, color = "#198754"}) {
    const animatedValue = useSpring({
        from: {val: 0},
        to: { val: value},
        config: {duration: 1000},
    })

    return ( 
        <>
            <animated.div className='m-4' style={{width: '100px', height: '100px'}}>
                {animatedValue.val.to(val => (
                    <CircularProgressbar 
                        value={val} 
                        text={`${Math.round(val)}%`}
                        styles={buildStyles({
                        textColor: color,
                        pathColor: color,
                        trailColor: "#eee"
                    })}/>
                ))}    
            </animated.div>
        </>
     );
}

export default CircularProgress;