import React from 'react'
import {Switch, useLocation, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition} from 'react-transition-group'

import "../src/Styles/animation.css"

import Home from '../src/components/pages/Home'
import About from '../src/components/pages/About'
import Services from '../src/components/pages/Services'
export default function Routes() {
    const location = useLocation();
    return ( 
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/services" exact component={Services} />
             </Switch>
        </CSSTransition>
    </TransitionGroup>
    )
}