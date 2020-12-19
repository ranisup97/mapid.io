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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
