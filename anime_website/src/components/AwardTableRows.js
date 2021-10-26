import React, { Component } from "react";


export default class AwardTableRows extends Component {
    
    constructor(props) {
        super(props);
        this.wrapRef = React.createRef()
        this.state = {
            trClasses: "trShow"
        }
    }
  
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentDidUpdate = () =>{
        window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll = (event)=>{
        // const elemHeight = input.elemHeight;
        const elemHeight = document.querySelector('.trShow').getBoundingClientRect().top;
        const innerHeight = window.pageYOffset;
        console.log('*******' , window.pageYOffset, elemHeight)
        
        // if(wrapRef){
            
        //     const { top } = wrapRef.getBoundingClientRect();
        if (elemHeight < innerHeight) {
            this.setState({ trClasses: "trShow transitioned-in" });
        }
        // }
    }

    render() {
        return (
            <tr 
            data-year={this.props.item.yaer}
            data-award={this.props.item.award}
            data-project={this.props.item.winner}
            data-status={this.props.item.status}
            className={this.state.trClasses}
            ref={this.wrapRef}>
                <td>
                    <div> <span>{this.props.item.yaer}</span> </div>
                </td>
                <td>
                    <div>
                        <span>{this.props.item.award}</span>
                        <span>Presented by</span>
                        <span>{this.props.item.award_Presented_by}</span>					
                    </div>
                </td>
                <td>
                    <div>
                        <span>{this.props.item.winner}</span>
                        <span>Category</span>
                        <span>{this.props.item.winner_categiry}</span>					
                    </div>
                </td>
                <td>
                    <div>
                        <span>{this.props.item.status}</span>
                        <span>Type</span>
                        <span>{this.props.item.status_type}</span>					
                    </div>
                </td>
            </tr>
        )
    }
}