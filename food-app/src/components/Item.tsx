import React, { ReactNode } from 'react'
import Description from './Description'

export interface Item {
    slug: string,
    company_name: string,
    title: string,
    description: string
}

interface Props {
    index: number
    item: Item
}
const Item = (props: Props) => {
    return (
        <>
            <div className="container">

                <div key={props.index}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.index}`} aria-expanded="true" aria-controls="collapseOne">

                            {props.item.company_name}
                        </button>
                    </h2>
                    <div id={`collapse${props.index}`} className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ background: 'rgb(214, 217, 252)' }}>
                            {/* {props.item.title} */}
                            <ul className="list-group">
                                <li className="list-group-item">{props.item.title}</li>
                                <li className="list-group-item">{props.item.slug}</li>
                                <li className="list-group-item">
                                    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Show description
                                    </button>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{props.item.slug}</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                {props.item.description}
                                <Description description={props.item.description} />
                                {/* <div className="modal-body" dangerouslySetInnerHTML={{ __html: props.item.description }}></div> */}

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item