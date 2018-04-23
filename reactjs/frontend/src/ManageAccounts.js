import React from 'react'
import ReactDOM from 'react-dom'
import AccountList from './AccountList.js';
import FilterAndAdd from './Filter.js';


export default class ManageAccounts extends React.Component {
constructor(props) {
        super(props);

        //Define the Initial State of the Application
        this.state = {
            ShowAccountList : true,
            ShowFilterUI: true
        }
    }
render() {
    return(<div>
        {this.state.ShowFilterUI && <FilterAndAdd OnAdd={this.showNewAccountScreen.bind(this)} OnFilter={this.filterAccountList.bind(this)} />}            
        {this.state.ShowAccountList && <AccountList /> } 
    </div>);
     }
 }