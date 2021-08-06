import React from 'react';
import { Form, Button } from 'react-bootstrap'


class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
            value: 0
        };
      }

      handleSubmit = (event) => {
          event.preventDefault()
          this.setState(prevState => {
              return {
                  name: event.target[0].value,
                  value: prevState.value + event.target[0].value.length
              }
          })
      }



    render () {

        return (
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="l-counter" placeholder="type here..." />
                </Form.Group>
                <Button type="submit" className="btn btn-dark btn-lg btn-block" value="Enter">Enter</Button>
            </Form>
                <p>{this.state.value}</p>
            </>
        )
    }
}

export default Counter