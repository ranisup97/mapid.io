import React, { Component } from "react";
import "./kemenperin.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class Kemenperin extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[3] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[3].authors[0].user });
        console.log("GET data user berhasil", res.data[3].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraperkemenperin bgphotokemenperin">
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
            <div className="imagekemenperin">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1598604952.jpeg"
                alt=""
              />
            </div>
            <div className="content2u">
              Kementrian Perindustrian (Kemenperin) Ditjen IKMA mempunyai tugas
              menyelenggarakan urusan di bidang perindustrian dalam
              pemerintahan. Kali ini MAPID dan Kemenperin bekerja sama untuk
              memajukan Industri Kecil, Menengah, dan Aneka (IKMA) di seluruh
              Indonesia melalui peta. Caranya adalah dengan memetakan seluruh
              persebaran IKMA di Indonesia sehingga dapat dianalisa secara tepat
              bagaimana kondisi setiap IKMA yang ada dan bantuan yang
              dibutuhkannya. Hal ini dapat membantu Kemenperin dalam memberikan
              dana pengembangan secara tepat sasaran kepada IKMA di seluruh
              wilayah Indonesia
            </div>
            <div className="content3u">
              FORM MAPID digunakan oleh Kemenperin dalam mendata persebaran IKM
              di seluruh Indonesia. Tidak hanya persebarannya, tetapi Kemenperin
              juga dapat mendata kebutuhan-kebutuhan IKMA, kemajuan produksi
              IKMA, keuntungan IKM, tenaga kerja, dan data lainnya yang
              dibutuhkan. Dengan begitu, Kemenperin tidak lagi membutuhkan
              surveyor yang harus secara langsung melakukan survey ke berbagai
              tempat. Cara seperti ini dapat sangat mengefektifkan sistem
              pendataan yang dilakukan oleh Kemenperin secara periodik.
            </div>
            <div className="content3u">
              Tidak hanya FORM MAPID yang digunakan, Kemenperin juga menggunakan
              GEO MAPID untuk memantau persebaran IKMA di seluruh Indonesia.
              Kemenperin juga dapat dengan mudah menganalisa data di dalam
              platform GEO MAPID ini. Sehingga bantuan Dana Alokasi Khusus (DAK)
              yang diberikan kepada IKMA dapat dilakukan dengan tepat sasaran.
            </div>
            <div className="content3u">
              Saat ini MAPID sedang mengembangkan sistem monitor yang ditanam di
              setiap provinsi. Nantinya data mengenai IKMA dan DAK yang telah
              disebarkan dapat dipantau di setiap provinsi. Kami berharap dapat
              memajukan IKMA yang tersebar di seluruh provinsi di Indonesia.
            </div>
            <div className="content24"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Kemenperin;
