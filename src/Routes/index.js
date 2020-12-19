import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  PieChart,
  Webinar,
  Podomoro,
  Binus,
  Algomarine,
  GajahMada,
  Unikom,
  Polban,
  Unjani,
} from "../page/Seminar";
import { Kemenperin, Mapid, TechInAsia, GKPlug } from "../page/Achievement";
import {MapidNews, InCollaboration, MapidDufan , Early, Mapping, MapidKompas, MapidBandung, GeoMapid} from "../page/News"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={PieChart} path="/" exact />
        <Route
          component={Webinar}
          path="/blog/webinar_elearning__iot_platform_batch_2"
        />
        <Route
          component={Podomoro}
          path="/blog/seminar_gis_podomoro_university"
        />
        <Route component={Binus} path="/blog/seminar_gis_binus" />
        <Route component={Algomarine} path="/blog/seminar_algomarine_" />
        <Route
          component={GajahMada}
          path="/blog/seminar_pendidikan_smk_gajah_mada_banyuwangi"
        />
        <Route component={Unikom} path="/blog/seminar_iot_unikom" />
        <Route component={Polban} path="/blog/seminar_polban" />
        <Route component={Unjani} path="/blog/seminar_unjani" />
        <Route component={Kemenperin} path="/blog/making_indonesia_40_by_kemenperin" />
        <Route component={Mapid} path="/blog/mapid_berhasil_menjadi_salah_satu_startup_terpilih_dalam_mrt_accel_2020" />
        <Route component={TechInAsia} path="/blog/tech_in_asia_conference_2019" />
        <Route component={GKPlug} path="/blog/gk_plug_and_play_batch_50" />
        
        <Route component={MapidNews} path="/blog/mapid_bersama_doctorshare_perangi_covid19_dengan_memetakan_kebutuhan_apd_di_indonesia" />
        
        <Route component={InCollaboration} path="/blog/in_collaboration_with_doctorshare_to_map_ppe_apd_needs_with_geo_mapid" />
        <Route component={MapidDufan} path="/blog/mapid_outing_at_dufan_ancol" />
        <Route component={Early} path="/blog/early_warning_system_on_smartwatch" />
        <Route component={Mapping} path="/blog/mapping_jakarta_flood_with_mapid" />
        <Route component={MapidKompas} path="/blog/mapid_featured_on_kompascom" />

        <Route component={GeoMapid} path="/blog/mapping_covid19_outbreak_with_geo_mapid" />
        <Route component={MapidBandung} path="/blog/now_mapid_as_a_collaborative_mapping_app_to_report_bandung_flood" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
