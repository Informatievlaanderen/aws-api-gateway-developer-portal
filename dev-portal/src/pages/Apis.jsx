// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

import { Link } from 'react-router-dom'

import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

import { isAuthenticated } from 'services/self'
import { updateUsagePlansAndApisList, getApi } from 'services/api-catalog';

import SwaggerLayoutPlugin from 'components/swagger/SwaggerUiLayout'

import { store } from 'services/state.js'
import { observer } from 'mobx-react'

import FunctionalNavigation from '../components/nav/FunctionalNavigation'

export default observer(class ApisPage extends React.Component {
  componentDidMount() { this.updateApi().then(() => updateUsagePlansAndApisList(true)) }
  componentDidUpdate() { this.updateApi() }

  updateApi = () => {
    return getApi(this.props.match.params.apiId || 'ANY', true, this.props.match.params.stage)
      .then(api => {
        if (api) {
          let swaggerUiConfig = {
            dom_id: '#swagger-ui-container',
            plugins: [SwaggerLayoutPlugin],
            supportedSubmitMethods: [],
            spec: api.swagger,
            onComplete: () => {
              if (store.apiKey)
                uiHandler.preauthorizeApiKey("api_key", store.apiKey)
            }
          }
          if (isAuthenticated()) {
            delete swaggerUiConfig.supportedSubmitMethods
          }
          let uiHandler = SwaggerUI(swaggerUiConfig)
        }
      })
  }

  render() {
    let errorHeader
    let errorBody 

    if (store.apiList.loaded) {
      if (!store.apiList.apiGateway.length && !store.apiList.generic.length) {
        errorHeader = `Geen API's beschikbaar`
        errorBody = `Momenteel zijn er nog geen API's beschikbaar voor je account. Contacteer de beheerder.`
      } else if (!store.api) {
        errorHeader = `Onbekende API`
        errorBody = `De geselecteerde API bestaat niet.`
      }
    }

    return (
      <div>
        <FunctionalNavigation />

        <div className="vl-page">
          <main id="main" itemProp="mainContentOfPage" role="main" tabIndex="0" className="vl-main-content">
            <div className="vl-region vl-region--no-space-bottom">
              <div className="vl-layout">
                <header className="wp-pt-heading">
                  <div className="wp-pt-heading__parent">
                    <Link to="/" className="router-link-active vl-link vl-link--bold">Overzicht</Link>
                  </div>
                  <div className="wp-pt-heading__title-wrapper">
                    <h1 className="wp-pt-heading__title vl-title vl-title--h1">Aanbod</h1>
                  </div>
                  <div className="vl-grid">
                    <div className="vl-col--9-12 vl-col--12-12--s">
                      <div className="wp-pt-heading__content">
                        <div className="vl-typography">
                          <p className="vl-introduction">
                            Ontdek hier ons volledig aanbod van <strong>Informatie Vlaanderen</strong> API's.
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
                
                <div className="swagger-section" style={{ marginTop: 20 }}>
                  <div className="swagger-ui-wrap" id="swagger-ui-container">
                    {errorHeader && errorBody && (
                      <div className="vl-alert vl-alert--warning" role="alert">
                        <div className="vl-alert__content">
                          <p className="vl-alert__title">{errorHeader}</p>
                          <div className="vl-alert__message">
                            <p>{errorBody}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    )
  }
})
