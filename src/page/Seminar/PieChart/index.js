import React, { Component } from "react";
import { Sidebar } from "../../../components";
import "./piechart.css";
import Axios from "axios";

class PieChart extends Component {
  state = {
    data: [],
    dataUser: [],
  };

  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[0] });
        console.log("GET data berhasil ", res.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[0].authors[0].user });
        console.log("GET data user berhasil ", res.data[0].authors[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWraper bgphotopie">
          <div className="dashboardSpecial">
            <div className="titleDocument">
              <strong key={this.state.data._id}>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer">
          <div className="profile">
            <div className="photoprofilepie"></div>

            <div className="profilename">
              {this.state.dataUser.full_name}
              <div className="profiledate">{this.state.data.date}</div>
            </div>

            <div className="content1">
              {this.state.data.EditorState}
              Setelah memudahkan para pengguna dalam melakukan analisa data
              menggunakan menggunakan pie chart, saat ini pie chart diperkaya
              dengan beberapa fitur yang lebih memudahkan Anda dalam membaca
              data di peta. Beberapa fitur tambahan yang saat ini disediakan :
            </div>

            <div className="content2">1. Filter Data dengan Pie Chart</div>
            <div className="imagepie">
              <img
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1608190614.png"
                alt=""
              />
            </div>

            <div className="content2">
              Jika anda perlu melakukan filter data berdasarkan klasifikasi yang
              sudah tersedia di pie chart, anda hanya perlu menekan salah satu
              item yang ada pada chart atau dengan menekan salah satu item yang
              ada pada daftar label di bawah pie chart. Kemudian, objek pada
              peta serta data pada tabel atribut akan tersaring sesuai dengan
              data yang anda pilih. Selain itu, chart lainnya juga akan
              tersaring sesuai dengan data yang anda pilih.
            </div>

            <div className="content3">
              2. Penerapan Warna pada Chart ke Objek pada Peta <br />
              Fitur lainnyaadalah anda dapat menerapkan warna yang ada pada
              chart ke dalam objek di peta. Sehingga, anda dapat lebih mudah
              membaca objek pada peta sesuai dengan klasifikasi yang ada pada
              pie chart. Fitur ini dapat diakses dengan menekan tombol yang
              berada pada kanan bawah pie chart.
            </div>

            <div className="imagepie">
              <img
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1608190740.png"
                alt=""
              />
            </div>

            <div className="content3">
              Saat sudah terpilih, maka tombol akan berubah warna menjadi warna
              biru
            </div>

            <div className="imagepie">
              <img
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1608190784.png"
                alt=""
              />
            </div>

            <div className="content3">
              3. Konsitensi Warna pada Pie Chart <br />
              Warna pada Pie Chart saat ini lebih konsisten sehingga memudahkan
              anda dalam melihat chart pada laman web maupun laporan .pdf
            </div>
            <div className="content4"></div>
          </div>
        </div>
      </>
    );
  }
}
export default PieChart;
