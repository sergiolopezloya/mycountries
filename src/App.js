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
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function App() {
  const totalPages = 49;//total number of pages as countries in database
  let [currentPage, getPage] = useState(1);
  let [countries, setCountries] = useState('');
  let [countriesInfo, setCountriesInfo] = useState('');

  const getCountries = (page) => {
    fetch(`http://localhost:8080/api/countries?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        countries = '';
        countriesInfo = '';
        json.map((country) => {
          countries += `
            <div>
              <div class="uk-card uk-card-secondary uk-card-body uk-margin-left">
                <h3 class="uk-text-truncate uk-margin-remove">${country.name}</h3>
                <p class="uk-text-left">
                  <b>Code:</b> ${country.code}<br/>
                  <b>Capital:</b> ${country.capital}
                  <a href="javascript:openModal('${country._id}')" class="uk-button uk-button-primary uk-width-1-1 uk-margin-top">More info</a>
                </p>
              </div>
            </div>
          `;
          const language = country.language.map((language) => {
            return `<span class="uk-badge">${language.code.toUpperCase()}: ${language.name}</span>`;
          }).join(' ');
          const currency = country.currency.map((currency) => {
            return `<span class="uk-badge">${currency.code.toUpperCase()}: ${currency.name}</span>`;
          }).join(' ');
          countriesInfo += `
            <div id="${country._id}" uk-modal>
              <div class="uk-modal-dialog">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header">
                    <h2 class="uk-modal-title">${country.name}</h2>
                </div>
                <div class="uk-modal-body">
                  <b>Code:</b> ${country.code}<br/>
                  <b>Capital:</b> ${country.capital}<br/>
                  <b>Region:</b> ${country.region}<br/>
                  <b>Language:</b> ${language}<br/>
                  <b>Currency:</b> ${currency}<br/>
                </div>
                <div class="uk-modal-footer uk-text-right">
                  <button class="uk-button uk-button-primary uk-modal-close" type="button">Close</button>
                </div>
              </div>
            </div>
          `;
        });
        setCountries(countries);
        setCountriesInfo(countriesInfo);
      });
  }

  useEffect(() => {
    getCountries(currentPage);
    document.title = `My Countries, showing page ${currentPage}`;
  });

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
            <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-wrap uk-text-center">
              <h2 className="uk-width-1-1">Country Select</h2>
              <div className="uk-width-1-1">
                <div className="uk-flex uk-flex-center uk-flex-middle uk-flex-wrap uk-text-center uk-flex-around uk-child-width-1-3" data-uk-grid>
                  {parse(countries)}
                </div>
              </div>
              <div className="uk-width-1-1">
                <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
                  <li><a href="javascript:void(0);" onClick={() => getPage(currentPage > 1 ? currentPage - 1 : currentPage)}><span data-uk-pagination-previous></span></a></li>
                  <li>
                    <span data-page className="uk-display-inline">{currentPage}</span>
                    /
                    <span data-pages className="uk-display-inline">{totalPages}</span>
                  </li>
                  <li><a href="javascript:void(0);" onClick={() => getPage(currentPage < totalPages ? currentPage + 1 : currentPage)}><span data-uk-pagination-next></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {parse(countriesInfo)}
      <div className="uk-section" id="uk-footer">
        <a href="#info" data-uk-toggle>Open</a>
        <div id="info" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body">Contenido</div>
        </div>
      </div>
    </div>
  );
}

export default App;
