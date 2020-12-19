import React, {Component} from "react";
import "./webinar.css";
import Axios from 'axios'
import { Sidebar } from "../../../components";

class Webinar extends Component {

  state = {
    data: [],
    dataUser:[]
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[7] });
        console.log("GET data berhasil ", res.data[7]);
      })
      .catch((err) => {
        console.log(err.message);
      });

      Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[7].authors[0].user });
        console.log("GET data user berhasil ", res.data[7].authors[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraper2 bgphoto2">
          <div className="dashboardSpecial2">
            <div className="titleDocument2">
              <strong>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer2">
          <div className="profile2">
            <div className="photoprofile2"></div>

            <div className="profilename2">
            {this.state.dataUser.full_name}
              <div className="profiledate2">{this.state.data.date}</div>
            </div>
            <div className="content11">It's been a nice day for us all !!!</div>

            <div className="content32">
              We have completed our E-Learning & IoT Platform Batch 2 Webinar.
              We never thought that there would be more participants than our
              first webinar. This time, participants not only saw the entire
              presentation but also joined and contributed to the E-Learning 4.0
              group.
            </div>

            <div className="imagepie2">
              <img
                className="img-thumbnail"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587035241.png"
                alt=""
              />
            </div>

            <div className="content22">
              Initially, our founder Bagus introduced briefly about MAPID
              products and our vision of MAKING INDONESIA 4.0 together through
              the MAPID ecosystem. He explained about NOW, GEO and IOT MAPID as
              an integrated location-based platform and data analytic solution.
              and after that he allowed our CTO Machrus to explain the new IOT
              MAPID E-Learning 4.0 features.
            </div>
            <div className="imagepie2">
              <img
                className="img-thumbnail "
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587039869.png"
                alt=""
              />
            </div>

            <div className="content32">
              There are six new feature on IOT MAPID E-Learning 4.0. Firstly,
              user (teacher/group creater) can create new group. After creating
              a group, user can add student/participant to the group. To manage
              permission, user can set also the group permission as open to
              allow public access or restrict.
            </div>

            <div className="content32">
              After creating group, group creator can create new folder to
              manage task and report documentation. After creating new folder,
              all user on same E-Learning group can create and view document
              each other.
            </div>

            <div className="content11">WELL! It's demo time ...</div>

            <div className="content32">
              After machrus creates the E-Learning & IoT Platform Batch 2 group,
              users who are ready to join the "live coding" are immediately
              asked to be invited to the group. And we really grateful because
              there were many users who wanted to join and practice "E-Learning
              4.0".
            </div>
            <div className="imagepie2">
              <img
                className="img-thumbnail "
                width="70%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587044446.jpeg"
                alt=""
              />
            </div>

            <div className="content32">
              After that machrus (as a teacher) makes assignments using
              documents <br />
              <br />
              1. Schematic drawing
              <br />
              2. Cable drawing
              <br />
              3. Real-time data screenshot
              <br />
              4. Warming temperature sensor
              <br />
              5. Screenshot of the Early Warning System
              <br />
              6. Share source code
              <br />
              7. And the idea of the device made.
              <br />
              <br />
              And Egi (developer of MAPID IoT as student) shares his screen and
              completes the task by doing direct coding and writing reports.
            </div>

            <div className="content11">
              Sooo, what's the difference between a normal E-Learning Platform?
            </div>
            <div className="imagepie2">
              <img
                className="img-thumbnail "
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587044649.jpeg"
                alt=""
              />
            </div>

            <div className="content22">
              Teachers can create assignments for their students to build and
              program their own IoT devices. Students can create API credentials
              on the IOT MAPID platform, and use it as an address to send IoT
              data to the IOT MAPID in real time. And API calls that are used by
              all students will be summarized and charged to group makers
              (teacher / educational institutions).
            </div>
            <div className="content32">
              Haris Ega, one of the participants, successfully completed the
              assignment. The IoT device sends temperature and humidity data
              seamlessly. He also wrote his report diligently. you can see the
              report through this link.
            </div>

            <div className="content22">
              https://iot.mapid.io/view_doc_iot/report/5e9820ef622321590338ad80
            </div>

            <div className="imagepie2">
              <img
                className="img-thumbnail "
                width="50%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1587045906.jpeg"
                alt=""
              />
            </div>

            <div className="content22">
              Many participants from several vocational high schools and
              universities appreciated the IOT MAPID E-Learning 4.0 platform and
              this useful event. Of course this is the beginning of Making
              Indonesia 4.0. We believe that through our E-Learing Platform and
              collaboration between MAPID and educational institutions will make
              "Making Indonesia 4.0" faster.
            </div>

            <div className="content22">
              See you on next webinar <span role="img">😎🙏</span>
            </div>
            <div className="content22">
              Let's Making Indonesia 4.0 <br />
              #mapidsenseit
            </div>
            <div className="content24">
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Webinar;
