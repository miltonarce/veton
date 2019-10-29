import React from "react";
import { Route } from "react-router-dom";
import { Grid, CssBaseline } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

// Veterinary Views
import HomeVet from "./HomeVet";
import AddClinicalHistory from "./AddClinicalHistory";
import AddConsultation from "./AddConsultation";
import Header from "./Header";

const ContentMain = styled('div')({
  width: '100%',
  top: '0',
  bottom: '0',
  position: 'absolute',
});

class Veterinary extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <ContentMain>
        <CssBaseline />
        <Header />
        <Route exact component={HomeVet} path={match.path} />
        <Route
          component={AddClinicalHistory}
          path={`${match.path}/add-clinical-history/:idPet`}
        />
        <Route
          component={AddConsultation}
          path={`${match.path}/add-consultation/:idHistory`}
        />
      </ContentMain>
    );
  }
}

export default Veterinary;
