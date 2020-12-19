import React, { Component } from "react";
import "./gajahmada.css";
import { Sidebar } from "../../../components";
import Axios from "axios";

class GajahMada extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[15] });
        console.log("GET data berhasil ", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[15].authors[0].user });
        console.log("GET data user berhasil ", res.data[15].authors[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <div id="root">
          <Sidebar />
          <div className="titleWraper4 bgphoto4">
            <div className="dashboardSpecial4">
              <div className="titleDocument4">
                <strong>{this.state.data.title}</strong>
              </div>
            </div>
          </div>

          <div className="documentContainer2">
            <div className="profile2">
              <div className="photoprofile2"></div>

              <div className="profilename4">
                {this.state.dataUser.full_name}
                <div className="profiledate4">{this.state.data.date}</div>
              </div>

              <div className="contentgm">
                Seminar Pendidikan SMK GAJAH MADA BANYUWANGI
              </div>

              <div className="imagepie4">
                <img
                  className="img-thumbnail"
                  width="90%"
                  src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1586479151.jpg"
                  alt=""
                />
              </div>

              <div className="contentgm">
                Digitalization has brought us to a more dynamic and evolving
                educational system. In Indonesia, this can be a good start to
                improve students knowledge when it comes to technology. SMK
                Gajah Mada Banyuwangi becomes a pioneer to implement IOT MAPID
                Platform for learning purposes. The students will use IOT MAPID
                Platform to create datasets from their own-built IOT devices.
              </div>

              <div className="content24"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GajahMada;
