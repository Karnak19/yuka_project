import React from "react";
import {Collapse, Button, CardBody, Card } from 'reactstrap';
import styles from "./Collapse.module.css"; 

export default class CollapseFaq extends React.Component{
  constructor(props){
    super(props)

    this.state= {
collapse: false,
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render(){
    const {title, description} = this.props;

    return (
      // Probleme de marges
      <div style={{textAlign: 'center'}}>

        <Button color="success" onClick={this.toggle} style={{marginBottom: '0.5rem', width: '70%', fontFamily: 'Patrick Hand SC', fontSize: '2em'}}>{this.props.title}</Button>

        <Collapse className={styles.center} isOpen={this.state.collapse}>
          <Card style={{border: "white", fontFamily: 'Patrick Hand SC', fontSize: '1.5em', width: '70%'}}>
            <CardBody>
          {this.props.description}
            </CardBody>
          </Card>
        </Collapse>
      </div>

    )
  }
}