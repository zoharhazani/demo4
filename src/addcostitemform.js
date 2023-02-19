/*
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import LocalStorage from "./localstorage";

const categoryArr = ['food', 'health', 'housing', 'sport', 'education', 'transportation','other'];

function AddCostItemForm({ onSubmit }) {
    const [sum, setSum] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate]=useState('');

    const handleSubmit = (event) => {
        debugger;
        console.log("AddCostItemForm");
        alert("Cost added seccesfuly");
        event.preventDefault();
        onSubmit({ sum, category, description,date });
        setSum('');
        setCategory('');
        setDescription('');
        setDate('');

    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p className="p">Sum: </p>
                <input className="textBox" type="number" value={sum} onChange={(event) => setSum(event.target.value)} required />
            </label>
            <br/>
            <label>
                <p className="p">Category: </p>
                <select className="textBox" value={category} onChange={handleCategoryChange} required>
                    <option value="">Choose an option</option>
                    {categoryArr.map((categoryItem, index) => (
                        <option key={index} value={categoryItem}>{categoryItem}</option>
                    ))}
                </select>

            </label>
            <br/>
            <label>
                <p className="p">Description: </p>
                <input className="textBox" type="text" value={description} onChange={(event) => setDescription(event.target.value)} required />
            </label>
            <br/>
            <label>
                <p className="p">Choose date: </p>
                <DatePicker className = "textBox"
                    value={date}
                    selected={date}
                    onChange={setDate}
                    id='date'
                    dateFormat='dd/MM/yyyy'
                    placeholderText='dd/mm/yyyy'
                />
            </label>
            <br/>
            <br/>
            <button className='myButton' type="submit">Add Cost Item</button>
        </form>
    );
}

export default AddCostItemForm;

 */
/* eslint-disable no-unused-vars */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const categoryArr = ['food', 'health', 'housing', 'sport', 'education', 'transportation','other'];

class AddCostItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: '',
            category: '',
            description: '',
            date: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Cost added successfully");
        this.props.onSubmit(this.state);
        this.setState({
            sum: '',
            category: '',
            description: '',
            date: ''
        });
    }

    handleCategoryChange(event) {
        this.setState({
            category: event.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p className="p">Sum: </p>
                    <input className="textBox" type="number" value={this.state.sum} onChange={(event) => this.setState({ sum: event.target.value })} required />
                </label>
                <br/>
                <label>
                    <p className="p">Category: </p>
                    <select className="textBox" value={this.state.category} onChange={this.handleCategoryChange} required>
                        <option value="">Choose an option</option>
                        {categoryArr.map((categoryItem, index) => (
                            <option key={index} value={categoryItem}>{categoryItem}</option>
                        ))}
                    </select>
                </label>
                <br/>
                <label>
                    <p className="p">Description: </p>
                    <input className="textBox" type="text" value={this.state.description} onChange={(event) => this.setState({ description: event.target.value })} required />
                </label>
                <br/>
                <label>
                    <p className="p">Choose date: </p>
                    <DatePicker className = "textBox"
                                selected={this.state.date}
                                onChange={this.handleDateChange}
                                id='date'
                                dateFormat='dd/MM/yyyy'
                                placeholderText='dd/mm/yyyy'
                    />
                </label>
                <br/>
                <br/>
                <button className='myButton' type="submit">Add Cost Item</button>
            </form>
        );
    }
}

export default AddCostItemForm;

