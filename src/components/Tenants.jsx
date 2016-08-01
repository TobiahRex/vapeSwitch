import React, { Component } from 'react'
import AddTenantForm from './AddTenantForm.jsx'
import TenantsDisplay from './TenantsDisplay.jsx'

import TenantActions from '../actions/TenantActions'
import TenantStore from '../stores/TenantStore'

function _getComponentState() {
  return {
    tenants: TenantStore.getAllTenants(),
  }
}

export default class Tenants extends Component {
  constructor(props){
    super(props);

    this.state = _getComponentState()
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    TenantActions.getAllTenants();
    TenantStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    TenantStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState(_getComponentState())
  }

  render() {
    return (
      <div className="text-center row">
        <h1>Tenants</h1>

        <div className="col-xs-6 col-xs-offset-3">
          <AddTenantForm addTenant={this.addTenant} />
        </div>

        <div className="col-xs-12">
          <TenantsDisplay tenants={this.state.tenants} />
        </div>

      </div>
    )
  }
}
