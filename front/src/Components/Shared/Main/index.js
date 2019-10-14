import React from 'react';
import { Route } from 'react-router-dom';

// Views App
import AddPet from '../../../Views/User/AddPet/AddPet';

//Views User
import HomeUser from '../../../Views/User/HomeUser';
import Profile from '../../../Views/User/Profile';
import Option from '../../../Views/User/Option';
import Pets from '../../../Views/User/Pets';

//Views Veterinary
import HomeVet from '../../../Views/Veterinary/HomeVet/index';
import AddClinicalHistory from '../../../Views/Veterinary/AddClinicalHistory/AddClinicalHistory';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section className="veton_app">
        {/* Users Views */}
        <Route exact path="/" component={HomeUser} />
        <Route exact path="/option" component={Option} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/profile" component={Profile} />
        {/* Vets Views */}
        <Route exact path="/veterinary" component={HomeVet} />
        <Route exact path="/add-pet" component={AddPet} />
        <Route exact path="/add-clinical-history" component={AddClinicalHistory} />
      </section>
    );
  }
}
