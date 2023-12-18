import React from 'react'
import "./Agents.css"

import Properties from '../Property/PropertyApi'

const Agents = (props) => {
    
  const properties = Properties.filter((item)=> item.category === "agent")

  return (
    <div>
      <div class="agent-text">
    <h1 class="agt">{props.title}</h1>
    <p>{props.des}</p>
</div>
<div class="agent">

{  properties.map((cur)=> {
  return (
    <div class="agent-1">
    <div class="agent-container-1" style={{
    backgroundImage: ` url(${cur.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment:"fixed"
  }}>
        <div class="one-1">
            <div>
                <h1>{cur.name}</h1>
                <p>Real Estate Agent</p>
            </div>
        </div>
        <div class="two-1"></div>
    </div> 
  </div>
  )
})
 
}

</div>
    </div>
  )
}

export default Agents
