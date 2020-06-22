import React from 'react'
import './App.css'
import books from './books.json'
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

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
            <h2 className="title">{bookDetail.title}</h2>
            <div className="d-flex bd-highlight example-parent">
              <div className="p-2 w-100 bd-highlight col-example">
              <p>Author: {bookDetail.author}</p>
              <p>{bookDetail.shortDescription}</p> </div>
              <div className="p-2 flex-shrink-1 bd-highlight col-example">
              <img src={bookDetail.coverImageUrl} width='25%' />
              </div>
            </div>
            <div>
              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Read More
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                  <p><em>Url: </em>{bookDetail.coverImageUrl}</p>
                      <p><em>Publisher: </em>{bookDetail.publisher}</p>
                      <p><em>Publication Date: </em>{bookDetail.publicationDate}</p>
                      <p><em>Description: </em>{bookDetail.detailedDescription}</p>
                  </CardBody>
                </Card>
              </UncontrolledCollapse>
            </div>
          </div>
        })}
      </div>

    )
  }
}
export default App
