import React, {Component} from 'react'
import data from '../../data'
import './Main.css'

export default class Main extends Component {
    constructor() {
        super()

        this.state= {
            data: data,
            index: 0
        }
    }

        next = () => {
            if(this.state.index === 24){
                this.setState({
                    index: 0
                })
                return
            }
        this.setState({
            index: this.state.index+1
        })

    }

    previous = () => {
        if(this.state.index === 0){
            this.setState({
                index: 24
            })
            return 
        }
        this.setState({
            index: this.state.index-1
        })

    }

    

    render() {
        console.log(this.state.data)
        const {data, index} = this.state
        return( 
            <section className='body'>
            <div className='displayData'>
                <h3 className='index'>{this.state.index+1}</h3>
                <h1 className='name'>{data[index].name.first} {data[index].name.last}</h1>
                {<h2 className='info'>From: {data[index].city}, {data[index].country}</h2>}
                {<h2 className='info'>Job Title: {data[index].title}</h2>}
                {<h2 className='info'>Employer: {data[index].employer}</h2>}
                {<h2 className='movies'>Favorite Movies:</h2>}
                 {data[index].favoriteMovies.map((el, index)=> (
                            <h1>{index+1}  {el}</h1>
                 ))}
                 </div>
                 <div className='navigation'>
                <button className='button' onClick={this.previous}>Previous</button>
                <button className='button' onClick={this.next}>Next</button>

            </div>
            </section>
        )
    }


}