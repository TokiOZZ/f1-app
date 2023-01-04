import { Component } from "react";
import './App.css';

import F1Services from '../services/F1Services'

class App extends Component {
    state = {
        seasonYear: 2021,
        driversList: []
    }

    f1Services = new F1Services()

    test2 = async () => {
        let newData = await this.f1Services.getSeasonResults(2006)
        return this.onGettingSeasonResult(newData)
    }

    // test = async () => {
    //     let res = await fetch('http://ergast.com/api/f1/2022/driverStandings.json')
    //     const newData = await res.json()
    //     this.setState({
    //         data: newData.MRData.StandingsTable.StandingsLists[0].DriverStandings
    //     })
    // }

    onGettingSeasonResult = (res) => {
        this.setState({
            driversList: [...res]
        })
    }

    render() {

        return (
            <div className="app">
                <button
                    type="button"
                    className="button-request"
                    onClick={this.test2}>
                    Push on me
                </button>
                <input
                    type="number"
                    className="input-year"
                    onChange={(e) => this.onGettingSeasonYear(e.target.value)} />
                <button onClick={this.test} className="test">TEST</button>
            </div>
        )
    }
}

export default App;

