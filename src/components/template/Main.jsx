import React from 'react'
import './Main.css'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/> {/* recebe herança? herda propridades */}
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>


