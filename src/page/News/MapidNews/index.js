import React, { Component } from "react";
import "./mapidnews.css";
import Axios from "axios";
import { Sidebar } from "../../../components";
class MapidNews extends Component {
  state = {
    data: [],
    dataUser: [],
  };
  componentDidMount() {
    Axios.get("http://api.mapid.io/blog/get_list_docs_public/blog")
      .then((res) => {
        this.setState({ data: res.data[6] });
        console.log("GET data berhasil", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  
  render() {
    return (
      <>
        <Sidebar />
        <div className="titleWrapermapidnews bgphotomapidnews">
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
              {/* {this.state.dataUser.full_name} */}
              <div className="profiledate">{this.state.data.date}</div>
            </div>
            <div className="content2u">
              MAPID berkolaborasi dengan doctorSHARE memetakan kebutuhan Alat
              Pelindung Diri (APD) di seluruh wilayah Indonesia. doctorSHARE
              merupakan organisasi kemanusiaan nirlaba yang memfokuskan diri
              pada pelayanan dan bantuan kemanusiaan. doctorSHARE resmi berdiri
              pada 19 November 2009 setelah sebelumnya aktif membantu dalam
              pelayanan kesehatan dan bantuan kemanusiaan sejak tahun 2003.
            </div>
            <div className="content2u">
              Pandemi COVID-19 telah menjadi fokus hampir semua sektor kehidupan
              masyarakat sejak kemunculannya pada akhir bulan Desember 2019.
              Jenis virus yang hingga saat ini belum ditemukan vaksinnya
              menyerang saluran pernapasan hingga membuat penderita kesulitan
              bernapas yang akhirnya mengakibatkan kematian jika tidak ditangani
              secara intensif. COVID-19 tergolong jenis virus yang penyebarannya
              cepat dan mudah karena dapat menular melalui cairan atau droplets
              yang masuk ke dalam tubuh manusia. Oleh karena itu, physical
              distancing menjadi opsi pencegahan virus selain kewajiban untuk
              menjaga tubuh agar selalu higienis dengan sering mencuci tangan.
            </div>
            <div className="content2u">
              Kendati banyak pasien yang telah sembuh dari COVID-19, namun,
              masih banyak sektor pelayanan publik yang bekerja dengan keras
              untuk memerangi virus ini. Sektor Kesehatan adalah salah satunya.
              COVID-19 membuat banyak tenaga kesehatan berada di garis terdepan
              dalam perang melawan virus yang kian hari kian beragam gejala yang
              muncul dari pasien yang terjangkit oleh virus ini. Oleh karena
              itu, isu keselamatan tenaga kesehatan menjadi hal yang ramai
              diperbincangkan.
            </div>
            <div className="content2u">
              Alat Pelindung Diri yang biasa disebut "APD", adalah peralatan
              yang dipakai untuk meminimalkan paparan bahaya yang menyebabkan
              cedera dan penyakit serius di tempat kerja. Hal ini dapat mencakup
              barang-barang seperti helm pengaman, sarung tangan, pelindung
              mata, pakaian visibilitas tinggi, alas kaki pengaman, dan tali
              pengaman. WHO telah menyatakan bahwa COVID-19 ditularkan melalui
              cairan tubuh yang terinfeksi. Adanya APD dapat membantu mengurangi
              resiko yang kemungkinan dialami oleh tenaga kesehatan selama
              bertugas. Selama pandemi COVID-19, menjaga suplai APD dalam jumlah
              yang cukup adalah wajib.
            </div>
            <div className="content2u">
              GEO MAPID merupakan platform Sistem Informasi Geografis berbasis
              web yang dapat memvisualisasikan data kebutuhan APD yang tersebar
              di seluruh Indonesia melalui peta. Dengan GEO MAPID, informasi
              yang divisualisasikan akan lebih mudah dimengerti karena telah
              terbagi melalui lokasi tanpa harus mengecek ulang pada data tabel.
              Karena permasalahannya terletak pada sulitnya mengolah data yang
              masif menjadi informasi yang mudah dimengerti oleh semua orang.
            </div>
            <div className="content2u">
              Tahapan yang dilakukan dimulai dari Data Collection. Pada tahap
              ini, data dikumpulkan melalui Google Form oleh doctorSHARE dan
              disebarkan kepada para dokter yang bertugas menangani COVID-19 di
              seluruh wilayah Indonesia. Setelah selesai diisi, kemudian data
              tersebut divisualisasikan ke dalam peta. Tahapan ini disebut
              dengan Data Visualization. Data Visualization merupakan proses
              transformasi data spreadsheets menjadi data berbasis lokasi yang
              kemudian ditampilkan pada sebuah peta. Ide sederhananya adalah,
              semua fasilitas kesehatan pasti memiliki lokasi. Sehingga, data
              tabel tersebut dapat dihubungkan dengan lokasi koordinat fasilitas
              kesehatan agar dapat divisualisasikan ke dalam peta. Setelah semua
              data divisualisasikan ke dalam peta, maka tahapan selanjutnya
              adalah Data Analytics.
            </div>

            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591692998.png"
                alt=""
              />
            </div>

            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693112.png"
                alt=""
              />
            </div>
            <div className="content2u">
              Data Analytics pada GEO MAPID dapat dilakukan dengan menggunakan
              tools yang disediakan. Beberapa fitur utamanya adalah Inspect yang
              memungkinkan pengguna untuk memperoleh informasi detail dari area
              atau titik yang diinginkan pada peta. Pengguna dapat menggunakan
              fitur Radius Scale untuk menganalisis area mana yang memiliki
              kebutuhan APD terbanyak dan mana yang paling membutuhkan APD.
              Dilengkapi dengan warna yang berbeda, pengguna dapat dengan mudah
              membaca informasi yang disajikan dalam peta kebutuhan APD.
            </div>
            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693340.png"
                alt=""
              />
            </div>
            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693309.png"
                alt=""
              />
            </div>

            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693423.png"
                alt=""
              />
            </div>

            <div className="content2u">
              Pengguna juga dapat melihat tampilan data secara 3D dengan fitur
              3D View agar lebih mudah dalam melakukan analisis. Data Slider
              merupakan fitur yang memudahkan pengguna untuk mengetahui
              perubahan data berdasarkan parameter yang telah diatur sebelumnya.
              Sebagai contoh, pada peta kebutuhan APD, pengguna dapat
              menggunakan Data Slider untuk mengetahui jenis APD apa saja yang
              telah didonasikan pada fasilitas kesehatan yang tersebar di
              seluruh wilayah Indonesia. Terakhir, fitur Filter Column dapat
              digunakan untuk membantu pengguna dalam memilih data apa saja yang
              ingin ditampilkan pada peta.
            </div>

            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693597.png"
                alt=""
              />
            </div>
            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693657.png"
                alt=""
              />
            </div>
            <div className="imagetech">
              <img
                className="img-fluid"
                width="90%"
                src="https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1591693788.png"
                alt=""
              />
            </div>
            <div className="content2u">
              Melalui MAPID, masyarakat dapat melihat distribusi APD dengan
              mudah pada tampilan peta. Sehingga, informasi mengenai daerah mana
              yang kebutuhan APD nya sudah mencukupi dan daerah mana yang masih
              membutuhkan dapat tersampaikan dengan jelas. doctorSHARE
              menyediakan donasi bagi siapa saja yang ingin membantu melengkapi
              kebutuhan APD bagi para tenaga kesehatan yang sampai saat ini
              masih berjuang melawan COVID-19.
            </div>
            <div className="content2u">
              Tautan ke Peta Kebutuhan APD: <br />
              <a href="https://geo.mapid.io/doctorsharecovid">https://geo.mapid.io/doctorsharecovid</a>
            </div>
            <div className="content2u">
              Tautan untuk Donasi melalui doctorSHARE: <br />
              <a href="http://www.doctorshare.org">http://www.doctorshare.org</a>
            </div>

            <div className="content2u">

            <blockquote
              className="RichEditor-blockquote"
              data-block="true"
              data-editor="cng5p"
              data-offset-key="59lhd-0-0"
            >
              <div
                data-offset-key="59lhd-0-0"
                className="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"
              >
                <span data-offset-key="59lhd-0-0" className="quote">
                  <span data-text="true">
                    Mari berdonasi melalui doctorSHARE dan bersama membantu
                    Indonesia dalam memerangi COVID-19!
                  </span>
                </span>
              </div>
            </blockquote>

            <div className="content24"></div>
          </div>
        </div>
        </div>
      </>
    );
  }
}

export default MapidNews;
