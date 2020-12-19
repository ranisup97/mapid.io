import React, { Component } from "react";
import "./geo.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class GeoMapid extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[23] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

      Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[23].authors[0].user });
        console.log("GET data berhasil", res.data[23].authors[23].user );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  
  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWrapergeo bgphotogeo">
          <div className="dashboardSpecialk">
            <div className="titleDocument">
              <strong>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer">
          <div className="profile">
            <div className="photoprofile"></div>

            <div className="profilename">
              {this.state.dataUser.full_name} 
              <div className="profiledate">{this.state.data.date}</div>
            </div>
          
           

            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1588146057.png"
                alt=""
              />
            </div>
            <div className="content2u">
            This is the maps of how COVID-19 outbreak spread exponentially and visualized in GEO MAPID from 22 January - 17 March 2020. The virus has infected many people from Wuhan to Asia to Europe, USA and the rest of the world .   hashtag#mapidseeit
            </div>

            
           

            
            
            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}

export default GeoMapid;
