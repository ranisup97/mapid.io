import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./unjani.css";
import Axios from "axios";

class Unjani extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[12] });
        console.log("GET data berhasil", res.data[12]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[12].authors[0].user });
        console.log("GET data user berhasil", res.data[12].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperu bgphoto">
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
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587354543.jpeg"
                alt=""
              />
            </div>

            <div className="content1u">
              Hi! Happy Monday! How's your weekend? We know, it's exciting since
              we are about to roll up 2019. But, since it has not ended yet, we
              have our one last closing event. The latest seminar was held at
              Jenderal Achmad Yani University, Cimahi, Bandung on December 21st
              2019. We want to tell you that it was fun! We exchanged thoughts
              about Internet of Things and virtual network. We are glad that
              there so many young-spirited person in the room who asked
              brilliant questions regarding to the technology! This is when we
              know that we are walking on the right track to unfold the
              challenging and technology-oriented years ahead. Don't miss our
              next MAPID Goes To Campus! Oh, perhaps it's your campus that we're
              going to visit next? Happy holiday and see ya!
            </div>
            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}
export default Unjani;
