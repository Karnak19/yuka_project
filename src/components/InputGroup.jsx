import React from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import {Redirect} from "react-router-dom";
import Qapp from "../quagga/App"

const homePageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh",
};

export default class InputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      barCode: "",
    };
  }



  render() {
      const { inputValue, barCode } = this.state;
    if (barCode) {return <Redirect to={`/product/${barCode}`}/>}

    return (
      <div className="" style={{backgroundColor:"rgb(255, 231, 94)", homePageStyle}}>
      
        <SearchInput onChange={inputValue => this.setState({ inputValue })} value={inputValue}/>
        <SearchButton barcode={inputValue} />
        <Qapp />
        </div>
    )
    }
  }

