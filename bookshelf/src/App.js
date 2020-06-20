import React from 'react'
import './App.css'
import books from './books.json'
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
    
  }

  handleClick = () => {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }))
  }

  render () {
    return (
      <div className='App'>
        <h1>Welcome to Freeshelf!</h1>
        {books.map((bookDetail, index) => {
          return <div key={index}>
            <h1>{bookDetail.title}</h1>
            <img src={bookDetail.coverImageUrl} width='25%' />
            <p>{bookDetail.author}</p>
            <p>{bookDetail.shortDescription}</p>
            <p>{this.state.isToggleOn && bookDetail.coverImageUrl}</p>
            <p>{this.state.isToggleOn && bookDetail.publisher}</p>
            <p>{this.state.isToggleOn && bookDetail.publicationDate}</p>
            <p>{this.state.isToggleOn && bookDetail.detailedDescription}</p>
            <button className='button'onClick={this.handleClick}>
              {this.state.isToggleOn ? 'Read Less' : 'Read More'}
            </button>
          </div>
        })}
      </div>

    )
  }
}
export default App
