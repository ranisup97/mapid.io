import React, { Component } from "react";
import "./tech.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class TechInAsia extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[17] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[17].authors[0].user });
        console.log("GET data user berhasil", res.data[17].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWrapertech bgphototech">
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
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1588146280.jpeg"
                alt=""
              />
            </div>
            <div className="content2u">
              It's a one fine day in TechInAsia Conference 2019! Thank you for
              all tech enthusiasts who stopped by and make it worth a while to
              our booth. See you in another tech expo! Let us know how we can
              help you. Now you know why we can be your solution, right? .
              TechInAsia is the largest English-language technology media
              company that focuses on Asia. It has hosted annual conferences
              across the continent primarily in Singapore, Tokyo and Jakarta
              since 2012. This year, MAPID is participating in TechInAsia's
              annual conference. . hashtag#mapid hashtag#mapidseeit
              hashtag#techinasia2019 hashtag#startup
            </div>
            <div className="imagetech">
              <img
                className="img-fluid"
                width="40%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1588146298.jpeg"
                alt=""
              />
            </div>

            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}

export default TechInAsia;
