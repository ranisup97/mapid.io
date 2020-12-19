import React, { Component } from "react";
import "./binus.css";
import { Sidebar } from "../../../components";
import Axios from "axios";

class Binus extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[9] });
        console.log("GET data berhasil ", res.data[9]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[9].authors[0].user });
        console.log("GET data user berhasil ", res.data[9].authors[0]);
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
          <div className="titleWraperbinus bgphotobinus">
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

              <div className="imagepie4">
                <img
                  className="img-thumbnail "
                  width="50%"
                  src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587466123.JPG"
                  alt=""
                />
              </div>

              <div className="contentbinus">
                We visited our friends in BINUS University and had a fun sharing
                session about Geographic Information System related to the
                development of technology in this era.
              </div>

              <div className="content24"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Binus;
