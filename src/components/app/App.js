import { Component } from "react";
import './App.css';
import { Button } from "antd";

import F1Services from '../services/F1Services'

class App extends Component {
    state = {
        seasonYear: 2021,
        driversList: []
    }

    f1Services = new F1Services()

    onGettingDriversList = (res) => {
        this.setState({
            driversList: res
        })
    }
    onGettingSeasonResults = async () => {
        let newData = await this.f1Services.getSeasonResults(2022)
        return this.onGettingDriversList(newData)
    }



    render() {

        return (
            <div className="app">
                <Button
                    type='primary'
                    size='large'
                    onClick={this.onGettingSeasonResults}>
                    Click to send request
                </Button>
            </div>
        )
    }
}

export default App;


// test = async () => {
//     let res = await fetch('http://ergast.com/api/f1/2022/driverStandings.json')
//     const newData = await res.json()
//     this.setState({
//         driversList: newData.MRData.StandingsTable.StandingsLists[0].DriverStandings
//     })
// }