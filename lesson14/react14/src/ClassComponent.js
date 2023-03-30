import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            confirmPassword: '',
            color: '',
            alert: ''
        }
    }

    onChangeFirst = (e) => {
        this.setState({
            password: e.target.value,
        });
    };


    onChangeSecond = (e) => {
        this.setState({
            confirmPassword: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        if (this.state.password === this.state.confirmPassword) {
            // alert('Ugurlur')
            document.querySelector('.ugurlu').style.display = 'block'
            this.setState({ color: "alert alert-primary", alert: 'basarili' })
        }
        else {
            // alert('bir daha yoxla')
            document.querySelector('.ugursuz').style.display = 'block'
            this.setState({ color: "alert alert-danger", alert: 'basarisiz' })
        }
    }



    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div class={this.state.color} role="alert">
                        {this.state.alert}
                    </div>
                    <p style={{ display: 'none' }} className='ugursuz'>Ugursuz</p>
                    <p style={{ display: 'none' }} className='ugurlu'>Ugurlur</p>
                    <input type="password" name="password" id="one" value={this.state.password} onChange={this.onChangeFirst} />
                    <input type="password" name="password" id="two" value={this.state.confirmPassword} onChange={this.onChangeSecond} />
                    <button>Submit</button>
                </form>
            </>
        )
    }
}

export default ClassComponent

// lifecycle
// render metodu
// daxilinde state  saxlayir