import React from 'react';
export default class AccountList extends React.Component {
constructor(props) {
        super(props);
    }
render() {
        return(<table className="table table-stripped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>User ID</th>
                        <th>E-Mail</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
       );
    }
}