import React, { Component } from 'react';
import { connect } from 'react-redux';
import './layout.css';

class Recommendation extends Component {
    constructor(props){
        super(props);
        this.state = {
            myrecomm: []
        };

    }
    render(){

        console.log(this.props.recomm)
        return(
            <div className='container'>
                <div className='text'>Recommendation:</div>
                <hr/>
                <div className='row'>
                    {this.props.recomm.map((recomm)=>{
                        
                        return (
                            <div className="item" key={recomm.id}>
                                <img src={recomm.img} alt={recomm.id}/>
                                <div className='btn'>
                                    <button onClick={()=> this.props.add(recomm.id)}>Add</button>
                                </div>
                                <div className='text'>{recomm.title}</div>
                                
                            </div>)
                    })}
                </div>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        recomm: state.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add:(id) => dispatch({type:"ADD", payload:id})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommendation);
