import React from 'react';
import './../styles/AddButon.css';
import {Link} from 'react-router-dom'
class AddButon extends React.Component{
    
    render(){
        return (
            <Link to="/exercise/new">
                <img src={this.props.img}  className="Fitness-Add"/>
            </Link>
        )
    }

}
export default AddButon;