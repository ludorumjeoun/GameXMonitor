import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Time from '../../components/Pages/Time';
import Table from '../../components/Table';

class AccountSingle extends Component {
  render() {
    const { account } = this.props;

    return (
      <Table
        vertical
        renderBody={() => (
          <React.Fragment>
            <tr>
              <th>Account</th>
              <td>
                <Link to={`/accounts/${account.account_name}`}>
                  {account.account_name}
                </Link>
              </td>
            </tr>
            <tr>
              <th>Balance</th>
              <td>{account.balance}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>
                <Time format="YYYY/MM/DD">{account.created}</Time>
              </td>
            </tr>
          </React.Fragment>
        )}
      />
    );
  }
}

export default AccountSingle;
