import React from 'react'
import ExerciseForm from './../components/ExerciseForm';
import Card from './../components/Card';

class ExerciseNew extends React.Component{
   
    
    state={
        form:{
            key:'',
            title:'', 
            description:'',
            img:'',
            img_empty:'',
            left_color:'', 
            rightColor:''
        },
    }

    handleChange=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            } 
        })
    }

    render(){
        return(
            <div className="row">
                <div className="col">
                    <Card {...this.state.form}/>
                </div>
                <div className="col">
                    <ExerciseForm onChange={this.handleChange} form={this.state.form}/>
                </div>
            </div>
        )
    }
}

export default ExerciseNew;