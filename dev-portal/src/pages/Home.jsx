// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { observer } from 'mobx-react'

import { Link } from 'react-router-dom'

import { isAuthenticated, getLoginRedirectUrl } from 'services/self'
import { cognitoDomain, cognitoClientId } from '../services/api'

import ContentNavigation from '../components/nav/ContentNavigation'

export const HomePage = observer(
  class HomePage extends React.Component {
    redirectUri = getLoginRedirectUrl()

    insertRegisterLink() {
      var registerText = (
        <article role="none">
          <h3 className="vl-spotlight__title">Registratie</h3>
          <p className="vl-spotlight__subtitle">Hoe schrijf ik mij in?</p>
          <div className="vl-spotlight__text"></div>
        </article>)

      return isAuthenticated() ?
        (
          <Link to="/apis" className="vl-spotlight">
            {registerText}
          </Link>
        ) : (
          <a href={`${cognitoDomain}/signup?response_type=token&client_id=${cognitoClientId}&redirect_uri=${this.redirectUri}`} className="vl-spotlight">
            {registerText}
          </a>
        )
    }

    render() {
      return <React.Fragment>
        <ContentNavigation />

        <div className="vl-page">
          <main id="main" itemProp="mainContentOfPage" role="main" tabIndex="0" className="vl-main-content">
            <div className="vl-region vl-region--no-space-bottom">
              <div className="vl-layout">
                <header className="wp-pt-heading">
                    <div className="wp-pt-heading__title-wrapper">
                    <h1 className="wp-pt-heading__title vl-title vl-title--h1">Basisregisters Vlaanderen</h1>
                  </div>
                  <div className="vl-grid">
                    <div className="vl-col--9-12 vl-col--12-12--s">
                      <div className="wp-pt-heading__content">
                        <div className="vl-typography">
                          <p className="vl-introduction">
                            Bent u op zoek naar authentieke gegevensbronnen? Dan bent u bij <strong>Informatie Vlaanderen</strong> aan het juiste adres.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>

            <div className="vl-region">
              <div className="vl-layout">
                <div className="vl-grid vl-grid--is-stacked">
                  <div className="vl-col--12-12">
                    <div className="vl-grid vl-grid--is-stacked">
                      <div className="vl-col--12-12">
           Bla!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vl-region vl-region--alt">
              <div className="vl-layout">
                <div className="vl-grid">
                  <div className="vl-col--4-12 vl-col--12-12--s">
                    {this.insertRegisterLink()}
                  </div>
                  
                  <div className="vl-col--4-12 vl-col--12-12--s">
                    <Link to="/getting-started" className="vl-spotlight">
                      <article role="none">
                        <h3 className="vl-spotlight__title">Handleiding</h3>
                        <p className="vl-spotlight__subtitle">Hoe gebruik ik een API?</p>
                        <div className="vl-spotlight__text"></div>
                      </article>
                    </Link>
                  </div>

                  <div className="vl-col--4-12 vl-col--12-12--s">
                    <Link to="/apis" className="vl-spotlight">
                      <article role="none">
                        <h3 className="vl-spotlight__title">Aanbod</h3>
                        <p className="vl-spotlight__subtitle">Welke APIs zijn er?</p>
                        <div className="vl-spotlight__text"></div>
                      </article>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="vl-region vl-region--overlap">
              <div className="vl-layout">
                <div className="vl-grid">
                  <div className="vl-col--12-12">
                    <div className="vl-grid vl-grid--is-stacked">
                      <div className="vl-col--12-12">
                        <div className="vl-contact-data">
                          <div className="vl-grid vl-grid--is-stacked">
                            <div className="vl-col--4-12 vl-col--12-12--m">
                              <div role="presentation" className="vl-infoblock">
                                <header role="presentation" className="vl-infoblock__header">
                                  <span aria-hidden="true" className="vl-icon vl-vi vl-vi-contacts vl-infoblock__header__icon"></span>
                                  <h2 className="vl-infoblock__title">Contact</h2>
                                </header>
                              </div>
                            </div>
                            <div className="vl-col--7-12 vl-push--1-12 vl-col--12-12--m vl-push--reset--m">
                              <div className="vl-properties">
                                <dl className="vl-properties__list">
                                  <dt className="vl-properties__label">Adres</dt>
                                  <dd className="vl-properties__data">
                                    Herman Teirlinckgebouw
                                    <br/>Havenlaan 88
                                    <br/>1000 Brussel, België
                                  </dd>
                                  <dt className="vl-properties__label">Telefoon</dt>
                                  <dd className="vl-properties__data">
                                    <p><a href="tel:+3292761500" className="vl-link">Bel 09 276 15 00</a></p>
                                    <p>Bereikbaar elke werkdag tussen 9 en 19 uur</p>
                                  </dd>
                                  <dt className="vl-properties__label">E-mail</dt>
                                  <dd className="vl-properties__data">
                                    <p><a href="https://www.vlaanderen.be/nl/vlaamse-overheid/contact/stuur-een-e-mail" className="vl-link">Stuur een e-mail</a></p>
                                    <p>Antwoord binnen 2 werkdagen</p>
                                  </dd>
                                </dl>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="vl-col--12-12">
                        <div className="vl-col--12-12">
                          <hr className="vl-u-hr vl-u-hr--wave" />
                        </div>
                      </div>
                      
                      <div className="vl-col--12-12">
                        <div className="vl-contact-data">
                          <div className="vl-grid vl-grid--is-stacked">
                            <div className="vl-col--4-12 vl-col--12-12--m">
                              <div role="presentation" className="vl-infoblock">
                                <header role="presentation" className="vl-infoblock__header">
                                  <span aria-hidden="true" className="vl-icon vl-vi vl-vi-chat vl-infoblock__header__icon"></span>
                                  <h2 className="vl-infoblock__title">Een klacht of melding?</h2>
                                </header>
                              </div>
                            </div>
                            <div className="vl-col--7-12 vl-push--1-12 vl-col--12-12--m vl-push--reset--m">
                              <div className="vl-grid vl-grid--is-stacked">
                                <div className="vl-col--8-12 vl-col--12-12--m">
                                  <div className="vl-typography">
                                    <p>Bent u niet tevreden over de werking van de Vlaamse overheid? Bent u het niet eens met een beslissing in een dossier? Neem contact op met de bevoegde dienst.</p>
                                    <p><a href="https://www.vlaanderen.be/een-klacht-over-een-vlaamse-overheidsdienst" className="vl-link">Meer over de klachtenprocedure</a></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    }
  }
)

export default HomePage
