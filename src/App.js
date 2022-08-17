import logo from './assets/images/logo.png';
import slide1 from './assets/images/slides/slide1.jpg';
import slide2 from './assets/images/slides/slide2.jpg';
import slide3 from './assets/images/slides/slide3.jpg';
import slide4 from './assets/images/slides/slide4.jpg';
import slide5 from './assets/images/slides/slide5.jpg';
import slide6 from './assets/images/slides/slide6.jpg';
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
      <div className="uk-section uk-padding-remove" id="uk-content">
        <div className="uk-position-relative">
          <div className="uk-position-relative" data-uk-slideshow="autoplay: true; finite: false">
            <ul className="uk-slideshow-items" data-uk-height-viewport="min-height: 200">
              <li>
                <img src={slide1} alt="" data-uk-cover />
              </li>
              <li>
                <img src={slide2} alt="" data-uk-cover />
              </li>
              <li>
                <img src={slide3} alt="" data-uk-cover />
              </li>
              <li>
                <img src={slide4} alt="" data-uk-cover />
              </li>
              <li>
                <img src={slide5} alt="" data-uk-cover />
              </li>
              <li>
                <img src={slide6} alt="" data-uk-cover />
              </li>
            </ul>
          </div>

          <div className="uk-overlay uk-overlay-primary uk-position-cover">
            <div className="uk-flex uk-flex-center uk-flex-middle uk-text-center">
              <h2 className="uk-width-1-1">Country Select</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section" id="uk-footer">

      </div>
    </div>
  );
}

export default App;
