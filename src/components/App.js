import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Exercises from '../pages/Exercises';
import ExercisesNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound';

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
               <Route path="/exercise" exact component={Exercises}/>
               <Route path="/exercise/new" exact component={ExercisesNew}/>
               <Route path='/' exact component={Exercises} /> 
                <Route component={NotFound}/>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default App;