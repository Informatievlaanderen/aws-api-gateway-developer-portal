// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { observer } from 'mobx-react'
import './ContentNavigation.scss';

import { isAdmin, isAuthenticated, logout, getLoginRedirectUrl } from 'services/self'
import { cognitoDomain, cognitoClientId } from '../../services/api'

export const ContentNavigation = observer(
  class ContentNavigation extends React.Component {
    getCognitoUrl = (type) => {
      let redirectUri = getLoginRedirectUrl()
      return `${cognitoDomain}/${type}?response_type=token&client_id=${cognitoClientId}&redirect_uri=${redirectUri}`
    }

    insertAuthMenu() {
      return isAuthenticated() ?
        (
          <ul className="vl-content-header__actions">
            <li className="vl-content-header__action"><p>John Bla ({isAdmin() ? "Beheerder" : "Gebruiker"})</p></li>
            <li className="vl-content-header__action"><p><a onClick={logout}>Meld af</a></p></li>
          </ul>
        ) : (
          <ul className="vl-content-header__actions">
            <li className="vl-content-header__action"><p><a href={this.getCognitoUrl('login')}>Aanmelden</a></p></li>
          </ul>
        )
    }

    render() {
      return <header id="vlaanderen-content-nav"  className="vl-content-header vl-content-header--has-actions vl-content-header--large vl-content-header--show-mobile vl-content-header--alt">
      <div className="vl-content-header__wrapper">
        <picture className="vl-content-header__bg">
          <img sizes="100vw" src="/custom-content/img/header_aiv.jpg" srcSet="/custom-content/img/header_aiv.jpg 320w, /custom-content/img/header_aiv.jpg 1024w, /custom-content/img/header_aiv.jpg 1600w" alt="agentschap Informatie Vlaanderen - API Aanbod" />
        </picture>
        <div className="vl-layout">
          {this.insertAuthMenu()}
          <div className="vl-content-header__content">
            <div className="vl-content-header__logo-wrapper">
              <a className="vl-content-header__entity-logo vl-content-header__entity-logo--small">
                <span className="vl-content-header__entity-logo__prefix">Agentschap</span>
                <span className="vl-content-header__entity-logo__title">Informatie Vlaanderen</span>
              </a>
            </div>
            <h2 className="vl-content-header__title ">
              <span className="vl-content-header__title__content">API Aanbod</span>
            </h2>
          </div>
        </div>
      </div>
    </header>
    }
  }
)

export default ContentNavigation
