import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./unikom.css";
import Axios from "axios";

class Unikom extends Component {
  state = {
    data: [],
    dataUser: []
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[10] });
        console.log(res.data[10]);
      })
      .catch((err) => {
        console.log(err.message);
      });

      Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[10].authors[0].user });
        console.log("Get data user berhasil",res.data[10].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperunikom bgphotounikom">
          <div className="dashboardSpecialu">
            <div className="titleDocumentu">
              <strong>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer">
          <div className="profile">
            <div className="photoprofile"></div>

            <div className="profilename">{this.state.dataUser.full_name}
              <div className="profiledate">{this.state.data.date}</div>
            </div>

            <div className="imagepieu">
              <img
                className="img-thumbnail "
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587368385.jpeg"
                alt=""
              />
            </div>

            <div className="content1u">
              MAPID IoT Workshop was successfully held with high enthusiasm from
              the participants. Woohoo! Attended by college students and tech
              enthusiasts, this workshop was focused on creating IoT devices.
              IOT kit was provided by MAPID for the participants to try. The
              goal was to make digital temperature sensor and they did it. Well
              done, guys!
            </div>
            <div className="content1u">

            </div>

          </div>
        </div>
      </>
    );
  }
}
export default Unikom;
