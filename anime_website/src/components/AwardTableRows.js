import React from "react";


export default function  AwardTableRows(props) {
    
    return (
        <tr 
            data-aos="fade-up"
            data-year={props.item.yaer}
            data-award={props.item.award}
            data-project={props.item.winner}
            data-status={props.item.status}
            style={{fontFamily:  'LisztFYRegular,Georgia,Times,serif'}}
        >
            <td>
                <div> <span>{props.item.yaer}</span> </div>
            </td>
            <td>
                <div>
                    <span>{props.item.award}</span>
                    <span>Presented by</span>
                    <span>{props.item.award_Presented_by}</span>					
                </div>
            </td>
            <td>
                <div>
                    <span>{props.item.winner}</span>
                    <span>Category</span>
                    <span>{props.item.winner_categiry}</span>					
                </div>
            </td>
            <td>
                <div>
                    <span>{props.item.status}</span>
                    <span>Type</span>
                    <span>{props.item.status_type}</span>					
                </div>
            </td>
        </tr>
    )
}