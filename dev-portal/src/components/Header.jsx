// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { observer } from 'mobx-react'

export const Header = observer(
  class Header extends React.Component {
    render() {
      return <header id="vlaanderen-top">
        <div id="vlaanderen-navigation">
          <a id="vlaanderen-link" href="https://www.vlaanderen.be/nl" target="_self">
            <div id="vlaanderen-top-logo"></div>
            <span>Vlaanderen</span>
          </a>
          <div id="home-navigation">
            <a id="home-link" href="https://basisregisters.vlaanderen.be">
              <span>Basisregisters Vlaanderen</span>
            </a>
          </div>
        </div>
      </header>
    }
  }
)

export default Header
