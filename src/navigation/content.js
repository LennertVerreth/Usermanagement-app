import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShapeOne from '../htmlShapes/shapeOne';
import ShapeTwo from '../htmlShapes/shapeTwo';
import ShapeThree from '../htmlShapes/shapeThree';
import ShapeFour from '../htmlShapes/shapeFour';
import UserManagement from '../usermanagement/index';
import Home from "../home/home"
import Contact from "../contact/contact"

const Content = () => (
  <div className="content">
    <Switch>
      <Route path='/shapeOne' component={ShapeOne}/>
      <Route path='/shapeTwo' component={ShapeTwo}/>
      <Route path='/shapeThree' component={ShapeThree}/>
      <Route path='/shapeFour' component={ShapeFour}/>
      <Route path='/usermanagement' component={UserManagement}/>
      <Route path='/home' component={Home}/>
      <Route path='/contact' component={Contact}/>      
    </Switch>
  </div>
)


export default Content;