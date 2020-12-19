import React, { Component } from "react";
import "./mapid.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class Mapid extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[5] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ dataUser: res.data[5].authors[0].user });
        console.log("GET data user berhasil", res.data[5].authors[0].user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWrapermapid bgphotomapid">
          <div className="dashboardSpecialk">
            <div className="titleDocument">
              <strong>{this.state.data.title}</strong>
            </div>
          </div>
        </div>

        <div className="documentContainer">
          <div className="profile">
            <div className="photoprofilemapid"></div>

            <div className="profilename">
              {this.state.dataUser.full_name}
              <div className="profiledate">{this.state.data.date}</div>
            </div>
            <div className="content2u">
              Pada bulan Agustus 2020 MAPID berhasil menjadi salah satu partner
              startup dalam program MRT Accel 2020. Terpilih menjadi partner
              startup untuk program Akselerasi MRT merupakan pencapaian yang
              baru bagi MAPID dan merupakan kesempatan emas bagi MAPID untuk
              berkembang. MAPID akan membantu MRT dalam memetakan potensi pasar
              untuk UMKM dan juga usaha-usaha lain (Merchants) yang berada di
              sekitar MRT.
            </div>
            <div className="imagemapid">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1597039744.png"
                alt=""
              />
            </div>

            <div className="content3u">
              Dari 40 jumlah perusahaan startups yang mengikuti seleksi, hanya
              10 perusahaan startups yang berhasil lolos. Daftar 10 peserta
              perusahaan startups yang berhasil lolos diantaranya adalah Pasar
              Polis (teknologi asuransi), Jakarta Bike Hub (kanal sepeda
              berbagi), Bobobox (sektor penginapan dalam bentuk hotel kapsul),
              MAPID (pengembang Sistem Informasi Geografis), Pintaria by Haruka
              Edu (penyedia kursus daring dan kelas karyawan), Maingame (kanal
              gim daring), Jejak.in (penyedia perangkat lunak penghitung dampak
              terhadap lingkungan dari aktivitas manusia), Sonicboom (pengumpul
              data mobilitas manusia), Nodeflux (bidang Computer Vision dan
              kecerdasan buatan (Artificial Intelligence), dan Rekosistem
              (pengelolaan limbah).
            </div>
            <div className="content3u">
              MRT Accel adalah program akselerasi dengan melakukan kolaborasi
              antara MRT Jakarta dan perusahaan startups di Indonesia, khususnya
              di bidang digital, untuk memberdayakan ekonomi digital dengan
              membuat produk bisnis atau jasa komersil yang akan memberikan
              dampak sosial melalui platform MRT. Tujuan dari program ini adalah
              sebagai inovasi untuk memaksimalkan fungsi yang telah dijalankan
              MRT Jakarta. MAPID dan juga perusahaan startups lainnya akan
              menjalin kerja sama dengan MRT Jakarta selama 6 bulan.
            </div>
            <div className="content3u">
              Program akselerasi sendiri merupakan program yang berbeda dengan
              program inkubasi. Program inkubasi relatif lebih lama dibandingkan
              program akselerasi. Karena program inkubasi biasanya diperuntukkan
              untuk perusahaan startup yang berada pada tahap awal atau early
              stage dengan tujuan pembuktian konsep (proof of concept) sedangkan
              program akselerasi biasanya diperuntukkan untuk perusahaan startup
              yang telah memiliki produk dengan tujuan pengembangan bisnis.
              Proses seleksi untuk tergabung dalam program akselerasi startup
              cenderung lebih ketat jika dibandingkan dengan program inkubasi.
            </div>
            <div className="content3u">
              Pada program kerja sama akselerasi antara MRT Jakarta dan MAPID
              ini akan difokuskan untuk membantu usaha-usaha (Merchants) yang
              ada di sekitar stasiun MRT. Bisnis ini akan didasarkan pada TOD
              (Transit Oriented Development) atau yang dikenal dengan istilah
              Kawasan Berorientasi Transit. MAPID dan juga MRT Jakarta akan
              bekerja sama dengan beberapa merchants yang ada di sekitar stasiun
              MRT Jakarta untuk pengembangan bisnis berbasis lokasi. Data yang
              didapatkan akan divisualisasikan dalam bentuk peta yang kemudian
              dapat digunakan oleh merchants untuk mengidentifikasi potensi
              pasar sehingga merchants dapat menentukan strategi bisnisnya
              dengan tepat dan meningkatkan usahanya. Selain itu, penumpang MRT
              juga dapat dengan mudah menemukan toko, kafe, restoran, dan tempat
              lainnya yang mereka butuhkan di sekitar stasiun MRT. Dari kerja
              sama tersebut diharapkan MAPID dapat membantu MRT dan merchants di
              sekitar stasiun dalam pengembangan bisnisnya.
            </div>
            <div className="imagemapid">
              <img
                className="img-fluid"
                width="70%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1597039770.png"
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

export default Mapid;
