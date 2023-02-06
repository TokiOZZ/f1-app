import { Component } from "react";
import './App.css';
import { Button, Input } from "antd";
import StartingPage from "../starting-page/StartingPage";
import DriverList from "../driversList/DriverList";

import F1Services from '../services/F1Services'

class App extends Component {
    state = {
        seasonYear: 2022,
        driversList: []
    }

    f1Services = new F1Services()

    onGettingDriversList = (res) => {
        this.setState({
            driversList: res
        })
    }
    onGettingSeasonResults = async () => {
        let newData = await this.f1Services.getSeasonResults(this.state.seasonYear)
        return this.onGettingDriversList(newData)
    }
    onGettingSeasonYear = (year) => {
        this.setState({
            seasonYear: year
        })
    }


    render() {
        const { driversList } = this.state
        return (
            <div className="app">
                <StartingPage />
                <Input.Group compact>
                    <Input
                        onChange={(e) => this.onGettingSeasonYear(e.target.value)}
                        style={{
                            width: '100px',
                            margin: '20px 0 20px 50px'
                        }}
                        type="number"
                        size='large'
                        defaultValue={2022}
                    />
                    <Button
                        onClick={this.onGettingSeasonResults}
                        type="primary"
                        size='large'
                        style={{
                            margin: '20px 0'
                        }}>
                        Get the RESULTS!
                    </Button>
                </Input.Group>
                <DriverList driversList={driversList} />
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