import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./polban.css";
import Axios from "axios";

class Polban extends Component {
  state = {
    data: [],
    dataUser: []
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[11] });
        console.log('GET data berhasil',res.data[11]);
      })
      .catch((err) => {
        console.log(err.message);
      });

      Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[11].authors[0].user });
        console.log('GET data user berhasil',res.data[11].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperpolban bgphotopolban">
          <div className="dashboardSpecialu">
            <div className="titleDocumentu">
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
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587355544.JPG"
                alt=""
              />
            </div>

            <div className="content1u">
              It's indeed our pleasure to be with the students of Politeknik
              Negeri Bandung today. We discussed about how technologies help
              people in many ways. In this case, especially through location
              intelligence and real-time data. Thank you for the enthusiasm and
              warm embrace. Look! Someone won a Quizz and get our very own
              designed tumbler. Let us know if you want your campus to be listed
              in our MAPID Road To Campus soon-to-be-visited. Have a nice
              weekend!
            </div>
            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Polban;
