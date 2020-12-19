import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./podomoro.css";
import Axios from "axios";

class Podomoro extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[8] });
        console.log("GET data berhasil ", res.data[8]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[8].authors[0].user });
        console.log("GET data user berhasil ", res.data[8].authors[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraper3">
          <div className="dashboardSpecial3">
            <div className="titleDocument3">
              <strong>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer3">
          <div className="profile3">
            <div className="photoprofile3"></div>

            <div className="profilename3">
              {this.state.dataUser.full_name}
              <div className="profiledate3">{this.state.data.date}</div>
            </div>
            <div className="content23">
              Seminar GIS PODOMORO UNIVERSITY edited
            </div>
            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Podomoro;
