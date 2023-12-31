import React, { ReactNode } from 'react'

interface Props {
    description: string
}
const Description = (props: Props) => {


    return (
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
    )

}

export default Description