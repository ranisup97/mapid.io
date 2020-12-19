import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./algomarine.css";
import Axios from "axios";

class Algomarine extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[13] });
        console.log("GET data berhasil", res.data[13]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[13].authors[0].user });
        console.log("GET data user berhasil", res.data[13].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperal bgphotoal">
          <div className="dashboardSpecialu">
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

            <div className="imagepieu">
              <img
                className="img-thumbnail "
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587350401.jpg"
                alt=""
              />
            </div>

            <div className="content1u">
              2020 runs super fast and it’s March already! Good morning,
              friends. We would like to show you the highlights of our latest
              event. Talking about the implementation of IOT in Oceanography has
              broadened our horizon. Now, we know the importance of ocean buoys.
              No, it’s not just there and floating. Ocean buoys are equipped
              with an array of sensors that measure all the parameters of air
              and water. Yes, this is the IOT in Oceanography we’re talking
              about. It’s also interesting to know that there are deep-sea
              sensors to detect earthquake and other related natural disaster.
            </div>
            <div className="content1u">
              Thank you, Algomarine, for having us. It’s a fun sharing session.
              See you in another event!
            </div>

            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Algomarine;
