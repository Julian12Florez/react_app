import React from 'react';
import circlesImg from '../images/circles.png';
import '../styles/Card.css';

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            img:'empty.png',
        }
    }
    
    /**Se ejecuta inmediatamente el componente se monta */
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                img:'exercise.png'
            })
        }, 5000);
    }

    render(){
        const {title,description,img,left_color,rightColor}=this.props;
        return (
            <div className="card mx-auto Fitness-Card mb-2"
            style={{
                backgroundImage: `url(${circlesImg}),
             linear-gradient(to right, ${left_color}, ${rightColor})`
             }}>
                <div className="card-body">
                    <div className="row center"> 
                        <div className="col-6">
                        {/* <img src={require(`../images/${this.state.img}`)} className="float-right"/> */}
                        <img src={img} className="float-right" alt="prueba"/>
                        </div>
                        <div className="col Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );

        // return <h1>Card</h1>
    }
}


export default Card;