import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPrices,fetchCompanyDetails,fetchTimeSeries} from './actions';
import Moment from 'react-moment';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

class Content extends Component{

constructor(){
  super();
  this.state={
    data:[],
    individualCompany:[],
    individualCompanyArchieveData:[]
  }
}
showDetails(){
  let  obj = this.props.CompanyDetails.find( (obj)=> { return obj.symbol === this.refs.datalistInput.value});
this.setState({
    individualCompany:obj
});
console.log(this.refs.companyinfo);
this.refs.companyinfo?(this.refs.companyinfo.style.display='block'):null;
this.refs.companygraph?(this.refs.companygraph.style.display='none'):null;
this.refs.companyprice?(this.refs.companyprice.style.display='none'):null;
}
componentDidMount(){
  this.props.fetchCompanyDetails();
}

showArchieveData(){
  let individualCompanyArchieveData = this.props.fetchPrices(this.refs.datalistInput.value);
  this.refs.companyinfo?(this.refs.companyinfo.style.display='none'):null;
  this.refs.companygraph?(this.refs.companygraph.style.display='none'):null;
  this.refs.companyprice?(this.refs.companyprice.style.display='block'):null;
}
showTimeSeries(){
this.props.fetchTimeSeries(this.refs.datalistInput.value);
let individualCompanyArchieveData = this.props.fetchPrices(this.refs.datalistInput.value);
this.refs.companyinfo?(this.refs.companyinfo.style.display='none'):null;
this.refs.companygraph?(this.refs.companygraph.style.display='block'):null;
this.refs.companyprice?(this.refs.companyprice.style.display='none'):null;
}





render(){
  const data=this.props.CompanyDetails?this.props.CompanyDetails:null;
  const individualPrices=this.props.Prices?this.props.Prices:null;
  const PriceArray=this.props.Prices.map((item)=>{
    return item.close
  })

  const TimeSeriesData=this.props.TimeSeriesData?this.props.TimeSeriesData:null;
  let TimeSeriesDataValue=[];
  Object.keys(TimeSeriesData).forEach((key) =>{
  Object.keys(TimeSeriesData[key]).forEach((key1)=>{

      if(Object.keys(TimeSeriesData[key][key1]).length>5){
        Object.keys(TimeSeriesData[key][key1]).forEach((key2)=>{
            Object.keys(TimeSeriesData[key][key1][key2]).forEach((key3)=>{
              TimeSeriesDataValue.push(TimeSeriesData[key][key1][key2]["4. close"]);
            })
        })
      }


  });


  });
  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">

          <input  ref={"datalistInput"} className="form-control" placeholder="type symbol or use dropdown" list="browsers" />
          <datalist  id="browsers">
            {data.length?data.map((item,index)=>{
              return <option  key={index} value={item.symbol}></option>
            }):null}
          </datalist>

        </div>
      <div className="col-sm-4">
      </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-4">
        </div>
        <div className="col-sm-4">
          <button className="btn btn-primary" onClick={this.showDetails.bind(this)}>Show Details</button> {"  "}
          <button className="btn btn-primary" onClick={this.showArchieveData.bind(this)} >Show Archieve</button>{" "}
          <button className="btn btn-primary" onClick={this.showTimeSeries.bind(this)} >Time Series</button>
        </div>
        <div className="col-sm-4">
        </div>
      </div>
      <br />

      <div  ref="companyinfo" className="row" style={{display:'none'}}>
        <div className="table-responsive pre-scrollable">
          {this.state.individualCompany?this.state.individualCompany.name?
            <table className="table table-bordered">
              <thead>
            <tr>
                <th>{"Symbol"}</th>
                <th>{"Name"}</th>
                <th>{"Market Cap"}</th>
                <th>{"Sector"}</th>
                <th>{"Industry"}</th>
            </tr>
            </thead>
              <tbody>

            <tr>
              <td>{this.state.individualCompany.symbol}</td>
              <td>{this.state.individualCompany.name}</td>
              <td>{this.state.individualCompany.marketcap}</td>
              <td>{this.state.individualCompany.sector}</td>
              <td>{this.state.individualCompany.industry}</td>
            </tr>
            </tbody>
            </table>
            :null:null}
        </div>
      </div>
      <div ref="companygraph" style={{display:'none'}}>
        <div  className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <h1>Archieve Data</h1>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <div  className="row">

          <Sparklines style={{ height: "200px",width:'100%' }} data={PriceArray?PriceArray:null}>
            <SparklinesLine color="blue" />
             <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
        <div  className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4">
            <h1>Current Daily Performance</h1>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <div className="row">
          <Sparklines style={{ height: "200px",width:'100%' }} data={TimeSeriesDataValue?TimeSeriesDataValue:null}>
            <SparklinesLine color="blue" />
             <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>

      </div>

      <div   ref="companyprice" className="row" style={{display:'none'}}>
        <div className="table-responsive pre-scrollable ">


        {individualPrices.length>0?
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>{"Date"}</th>
                <th>{"Low"}</th>
                <th>{"High"}</th>
                <th>{"Open"}</th>
                <th>{"close"}</th>
                <th>{"Volume"}</th>

              </tr>
            </thead>
            <tbody>
          {individualPrices?individualPrices.map((item,index)=>{
            return(
              <tr key={index}>
              <td><Moment date={item.date}/></td>
              <td>{item.low}</td>
              <td>{item.high}</td>
              <td>{item.open}</td>
              <td>{item.close}</td>
              <td>{item.volume}</td>
              </tr>
            )
          }):null}
        </tbody>
          </table>
        :"No Recoed Found in our Archieves"}
  </div>

      </div>
    </div>
  )
}

}
function mapStateToProps(state){
return {
  Prices:state.Prices,
  CompanyDetails:state.CompanyDetails,
  TimeSeriesData:state.TimeSeriesData
};
}
export default connect(mapStateToProps,{fetchPrices,fetchCompanyDetails,fetchTimeSeries})(Content);
