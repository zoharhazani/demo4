/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from './button';
import './App.css';
import AddCostItemForm from './addcostitemform';
import ReturnReport from "./reportform";

function App() {
    const [lastClickedButton, setLastClickedButton] = useState(null);
    const [showAddCostForm, setShowAddCostForm] = useState(false);
    const [showReportForm, setShowReportForm] = useState(false);


    const handleButtonClick = (buttonText) => {
        setLastClickedButton(buttonText);
        if (buttonText === 'Add cost') {
            setShowAddCostForm(true);
            setShowReportForm(false);
        } else if (buttonText === 'Get a report') {
            setShowReportForm(true);
            setShowAddCostForm(false);
        }
    };
    const handleSubmit = (costItem) => {
        debugger;
        console.log("handleSubmit");
        const costs = JSON.parse(localStorage.getItem('costs')) || [];
        costs.push(costItem);
        localStorage.setItem('costs', JSON.stringify(costs));
    };


    return (
        <div className="App">
            <header className="App-header">
                <div className='buttons'>
                    <h1 className='CostManagerHeader'>Cost Manager</h1>
                    <Button  text="Add cost" onClick={handleButtonClick}/>
                    <Button  text="Get a report" onClick={handleButtonClick}/>
                </div>
                {showAddCostForm && (
                    <div>
                        <br/>
                        <AddCostItemForm onSubmit = {handleSubmit} />
                    </div>
                )}
                {showReportForm && (
                    <div>
                        <br/>
                        <ReturnReport />
                    </div>
                )}
                <div className="about">
                    <p > Cost Manager 2023</p>
                    <p> Lior Shlomo, Zohar Hazani</p>

                </div>

            </header>

        </div>
    );
}

export default App;


