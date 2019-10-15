// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

import { Link } from 'react-router-dom'

import { observer } from 'mobx-react'
import { fragments } from 'services/get-fragments'

import FunctionalNavigation from '../components/nav/FunctionalNavigation'

export default observer(() => (
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
                <h1 className="wp-pt-heading__title vl-title vl-title--h1">Handleiding</h1>
              </div>
              <div className="vl-grid">
                <div className="vl-col--9-12 vl-col--12-12--s">
                  <div className="wp-pt-heading__content">
                    <div className="vl-typography">
                      <p className="vl-introduction">
                        Hoe ga ik aan de slag met dit <strong>portaal</strong> en de <strong>APIs</strong>?.
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
            <div class="vl-typography" style={{ marginTop: 20 }}>

              <fragments.GettingStarted.jsx />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
))
