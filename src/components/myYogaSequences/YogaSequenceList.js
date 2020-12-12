import React, { useContext, useEffect, useState } from "react"
import { YogaSequenceContext } from "./YogaSequenceProvider"
import {YogaPoseContext} from "../knowYourYogaPoses/YogaPoseProvider"
import {YogaPose} from "../knowYourYogaPoses/YogaPose"
import { Link } from "react-router-dom"

import "./YogaSequence.css"



export const YogaSequenceList = (props) => {
    const { yogaSequences, getYogaSequences } = useContext(YogaSequenceContext)
    const { yogaPoses, getYogaPoses} = useContext(YogaPoseContext)

    useEffect(() => {
        getYogaSequences() 
        getYogaPoses()
    }, [])

    const [SelectyogaPoses, setYogaPose] = useState(0)
    return (
        
        <div className="yogaSequences">
            {/* {console.log(SelectyogaPoses)} */}
            <h1>My Yoga Sequences </h1>
              <select onChange={(pose) => {
                setYogaPose(pose.target.value)
              }}>
                  <option value = "0"> Choose your yoga pose..</option>
                  {
                yogaPoses.map(singlePose => <YogaPose key={singlePose.id} yogaPose={singlePose}/>)
               }
          
           </select>
           
            <button onClick={() => props.history.push("/yoga-sequence/create")}>
                Make your own sequence...
            </button>
    
            <article className="yogaSequences">
                {
                    yogaSequences.map(yoga => {
                        return <Link key={yoga.id} to={`/yoga-sequence/${yoga.id}`}>
                            <h3>{yogaSequences.title}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
    }