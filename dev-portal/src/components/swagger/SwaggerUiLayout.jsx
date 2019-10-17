// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

// services
import { subscribe, unsubscribe } from 'services/api-catalog'
import { isAuthenticated } from 'services/self'

import { observer } from 'mobx-react'
import { store } from 'services/state.js'

import './SwaggerUiLayout.scss'

// Create the plugin that provides our layout component
export const SwaggerLayoutPlugin = () => {
  return {
    components: {
      InfoContainer: InfoReplacement,
      AuthorizeBtnContainer: EmptyReplacement,
      SchemesContainer: EmptyReplacement,
      ServersContainer: EmptyReplacement,
      FilterContainer: EmptyReplacement,
      ModelWrapper: EmptyReplacement,
      Model: EmptyReplacement,
      Models: EmptyReplacement,
      SvgAssets: EmptyReplacement,
      operations: EmptyReplacement,
    }
  }
}

const EmptyReplacement = observer(({ specSelectors }) => { return (<div className="remove-swagger">WTF</div>) })

const InfoReplacement = observer(({ specSelectors }) => {
  const host = specSelectors.host()

  var description = '';

  switch (host) {
    case 'api.basisregisters.vlaanderen':
      description = (
        <div className="vl-typography vl-u-spacer--medium">
          <p>De Basisregisters Vlaanderen API stelt u in staat om alles te weten te komen rond:</p>
          <ul>
            <li>de Belgische gemeenten;</li>
            <li>de Belgische postcodes;</li>
            <li>de Vlaamse straatnamen;</li>
            <li>de Vlaamse adressen;</li>
            <li>de Vlaamse gebouwen en gebouweenheden;</li>
            <li>de Vlaamse percelen;</li>
            <li>de Vlaamse organisaties en organen;</li>
            <li>de Vlaamse dienstverlening;</li>
          </ul>
          <p>Basisregisters Vlaanderen is de authentieke bron rond al bovenstaande gegevens met uitzondering van gemeenten, postcodes en percelen, die wij aanbieden als referentie bron.</p>
       
          <p><a href="https://docs.basisregisters.vlaanderen.be" className="vl-link vl-link--block"><span aria-hidden="true" className="vl-icon vl-vi vl-vi-arrow-right-fat vl-link__icon vl-link__icon--before"></span>Bekijk de documentatie</a></p>
        </div>
      )
      break;
    
      default:
      description = ''
  }

  return (
    <div>
      <h2 className="vl-title vl-title--h2">{store.api.swagger.info.title}</h2>
      {description}
      <SubscriptionButtons />
    </div>
  )
})

const SubscriptionButtons = observer(class SubscriptionButtons extends React.Component {
  state = {}

  render() {
    const { api } = store

    return (
      (api && isAuthenticated()) ? !api.generic ? (
        api.subscribed ? (
          <div>
            <button onClick={() => unsubscribe(api.usagePlan.id)} className="vl-button vl-button--error">
              Stoppen met gebruik maken van deze API
            </button>

            <div className="vl-alert vl-alert--success" role="alert" style={{marginTop: '3rem'}}>
              <div className="vl-alert__content">
                <p className="vl-alert__title">Gebruik</p>
                <div className="vl-alert__message">
                  <p>API Key: <span id="api-key">{store.apiKey}</span></p>
                  <p>Verzoeken beperkt tot {api.usagePlan.throttle.rateLimit} per seconde.</p>
                  <p>Indien u meer verzoeken per seconde wenst, gelieve contact met ons op te nemen.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => subscribe(api.usagePlan.id)} className="vl-button">
            Van deze API gebruik maken
          </button>
        )
      ) : <div>This API is not configured for subscription from the portal.</div> : null
    )
  }
})

export default SwaggerLayoutPlugin