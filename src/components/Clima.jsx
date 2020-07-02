import React from "react";

const url =
    "http://api.weatherstack.com/current?access_key=04ba2d7510863ad53e9dbdfb1b1beab3&query=Buenos Aires";

class Clima extends React.Component {
    state = {
        temperatura: 0,
        date: "00:00",
        urlIcon: "",
    };

    async componentDidMount() {
        await this.getTemperature();
        this.timerID = setInterval(() => this.getDate(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    getTemperature = async () => {
        let res = await fetch(url);
        let data = await res.json();

        this.setState({
            temperatura: data.current.temperature,
        });
        this.setState({
            urlIcon: data.current.weather_icons[0],
        });
    };
    getDate() {
        this.setState({ date: new Date().toLocaleTimeString() });
    }

    render() {
        return (
            <div className="nav-i clima">
                <span className="clima-item">
                    {this.state.urlIcon ? (
                        <img
                            src={this.state.urlIcon}
                            alt="icon-clima"
                            style={{ maxHeight: 25, paddingRight: 5 }}
                        />
                    ) : (
                        ""
                    )}
                    Buenos Aires: {this.state.temperatura}°
                </span>
                <span className="clima-item">{this.state.date}</span>
            </div>
        );
    }
}

export default Clima;
