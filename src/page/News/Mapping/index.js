import React, { Component } from "react";
import "./mapping.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class Mapping extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[20] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[20].authors[0].user });
        console.log("GET data user berhasil", res.data[20].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperduf">
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
            
            <div className="content2u">
                {this.state.data.title}
            </div>

            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Mapping;
