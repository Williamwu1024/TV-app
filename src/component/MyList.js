import React, {Component} from 'react';
import { connect } from 'react-redux';
import './layout.css';


class Mylist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mylist: []
        };
    }

    render(){
        return (
            <div className='container'>
                <div className='text'>MyList:</div>
                <hr/>
                <div className='row'>
                    {this.props.mylist.map((mylist)=>{
                        
                        return (
                            <div className="item" key={mylist.id}>
                                <img src={mylist.img} alt={mylist.id}/>
                                <div className='btn'>
                                    <button onClick={()=> this.props.remove(mylist.id)}>Remove</button>
                                </div>
                                <div className='text'>{mylist.title}</div>
                                
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        mylist: state.mylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove:(id) => dispatch({type:"REMOVE", payload:id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);