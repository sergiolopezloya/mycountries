import logo from './assets/images/logo.png';
import './assets/scss/App.scss';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/css/uikit-core.min.css';
import 'uikit/dist/js/uikit.min.js';

function App() {
  return (
    <div className="CountriesApp">
      <div className="uk-section uk-section-xsmall uk-section-primary" id="uk-header">
        <div className="uk-flex uk-flex-center uk-flex-middle">
          <img src={logo} className="uk-logo" alt="My Countries" />
          <h3 className="uk-margin-remove-top uk-margin-remove-bottom uk-margin-small-left">My Countries</h3>
        </div>
      </div>
      <div className="uk-section" id="uk-content">
        <div className="uk-container">

        </div>
      </div>
      <div className="uk-section" id="uk-footer">

      </div>
    </div>
  );
}

export default App;
