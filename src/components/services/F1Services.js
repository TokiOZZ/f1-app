class F1Services {

    _apiBase = 'http://ergast.com/api/f1/'
    _baseYear = 2022

    getResponse = async (url) => {
        let res = await fetch(url)
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    _transformData = (res) => {
        return {
            driver: `${res.Driver.givenName} ${res.Driver.familyName}`,
            number: res.Driver.permanentNumber,
            team: res.Constructors[0].name,
            position: res.position,
            wins: res.wins,
            points: res.points
        }
    }

    getSeasonResults = async (seasonYear = this._baseYear) => {
        const result = await this.getResponse(`${this._apiBase}${seasonYear}/driverStandings.json`)
        return result.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(this._transformData)
    }

}

export default F1Services;