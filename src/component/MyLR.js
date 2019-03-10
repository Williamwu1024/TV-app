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
        let title = null,
            selectedItem = [],
            btn = null, 
            button = null;
        
        if(this.props.select === 'MyList'){
            selectedItem = this.props.mylist;
            title = 'MyList';
            btn = (thisitem) => this.props.remove(thisitem);
            button = 'Remove';
        } else {
            selectedItem = this.props.recomm;
            title = 'Recommendation';
            btn = (thisitem) => this.props.add(thisitem);
            button = 'Add';
        };
        console.log(selectedItem);
        return(
            <div className='container'>                
                <div className='text'>{title}</div>
                <div className='row'>
                    {selectedItem.map((list)=>{
                        
                        return (
                            <div className="item" key={list.id}>
                                <img src={list.img} alt={list.id}/>
                                <div className='btn'>
                                    <button onClick={() => btn(list.id)}>{button}</button>
                                </div>
                                <div className='text'>{list.title}</div>
                                
                            </div>)
                    })}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        recomm: state.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        remove:(id) => dispatch({type:"REMOVE", payload:id}),
        add:(id) => dispatch({type:"ADD", payload:id})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mylist);