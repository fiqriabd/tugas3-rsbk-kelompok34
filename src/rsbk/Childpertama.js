import React, { Component } from "react";
class Childpertama extends Component {
    state = {
        nama: "Fiqri"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "Fiqri") {
                return {nama : "Sirajuddin Far"}
            } else {
                return { nama: "Fiqri"}                 
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('child Pertama will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Aku child-pertama</h4>
                <button onClick={this.ubahNama}>Ubah nama!</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Childpertama;