/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocalStorage from './localstorage';
import './reportform.css';

function ReturnReport() {
    const [date, setDate] = useState('');
    const [matchingCosts, setMatchingCosts] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const selectedMonth = date.getMonth();
        const selectedYear = date.getFullYear();

        const storedCosts = JSON.parse(await LocalStorage.getItem('costs')) || [];

        const matchingCosts = storedCosts.filter((cost) => {
            const costMonth = new Date(cost.date).getMonth();
            const costYear = new Date(cost.date).getFullYear();

            return costMonth === selectedMonth && costYear === selectedYear;
        });

        setMatchingCosts(matchingCosts);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p className="p">Choose date: </p>
                <DatePicker className='textboxreport'
                    value={date}
                    selected={date}
                    onChange={setDate}
                    id='date'
                    dateFormat='MM/yyyy'
                    showMonthYearPicker
                    placeholderText='mm/yyyy'
                />
            </label>
            <br/>
            <br/>
            <button className='myButton' type="submit">Get Report</button>

            {matchingCosts.length > 0 && (
                <div>
                    <h2>Matching Costs</h2>
                    <div className="table-container">
                        <table>
                            <thead>
                            <tr className="tr" >
                                <th>Category</th>
                                <th>Description</th>
                                <th>Sum</th>
                            </tr>
                            </thead>
                            <tbody>
                            {matchingCosts.map((cost) => (
                                <tr className="tr" key={cost.id}>
                                    <td>{cost.category}</td>
                                    <td>{cost.description}</td>
                                    <td>{cost.sum}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}


        </form>


    );
}

export default ReturnReport;







