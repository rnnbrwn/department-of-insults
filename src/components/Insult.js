import React from 'react'
import Names from './names.json'

export default function Insult() {
    return (
        <div>
            <h1>Insult goes here</h1>
            {
                Names && Names.map ( name => {
                    return (
                        <div key={ name.id }>
                            <strong>{ name.firstname }</strong>
                            </div>
                    )
                })
            }
        </div>
    )
}