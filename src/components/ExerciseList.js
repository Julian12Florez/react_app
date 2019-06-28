import React from 'react';
import Card from './../components/Card';

class ExcerciseList extends React.Component{
    render(){
        return (
            <div>
            {
                this.props.data.map((exercise)=>{
                return (<Card 
                    key={exercise.id}
                    title={exercise.title} 
                    description={exercise.description}
                    img={exercise.img}
                    img_empty="empty.png"
                    left_color={exercise.leftColor} 
                    rightColor={exercise.rightColor}/>);
                    })
            }
            </div>
        );
    }
}

export default ExcerciseList;