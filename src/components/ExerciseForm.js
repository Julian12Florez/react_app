import React from 'react'

class ExerciseForm extends React.Component{
    
 state={};


    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        const {onChange,form}=this.props
        return(
            <div className="container">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="title" 
                    name="title"
                    value={form.title}
                    onChange={onChange}               
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="description" 
                    name="description"
                    value={form.description}
                    onChange={onChange} 
                    /> 
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="img" 
                    name="img"
                    value={form.img}
                    onChange={onChange} 
                    />
            </div>
            <div className="form-row">
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="left_color" 
                        name="left_color"
                        value={form.left_color}
                        onChange={onChange} 
                    />
                </div>
                <div className="col">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="rightColor" 
                        name="rightColor"
                        value={form.rightColor}
                        onChange={onChange} 
                    />    
                </div>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary float-right"
            >
                Registrar infromación
            </button>
        </form>
    </div>
        )
    }
}

export default ExerciseForm;