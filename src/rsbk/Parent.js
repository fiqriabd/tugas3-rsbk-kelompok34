import { Component } from "react";
import React from "react";
import Childpertama from "./Childpertama";
import Childkedua from "./Childkedua";
class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! State Sebelumnya Childpertama: ${prevState.komponen1} -- State Sebelumnya Childkedua: ${prevState.komponen2}`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah Anda yakin?');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Childpertama /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : 'SHOW'} child Pertama!</button>
                <br/>
                {this.state.komponen2 ? <Childkedua /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : 'SHOW'} child Kedua!</button>
            </div>
        );
    }
}
export default Parent;