import React from 'react';
import Container from '@material-ui/core/Container';
import { render } from 'react-dom';
import './index.css';
import ButtonAppBar  from './bar.app.js';   
import LOGIN from './login.app.js'; 
import InfoPage from './info.app.js';
import User from './user.app.js'
 class PAGE extends React.Component {

    render()
     {
        if(this.props.page == LOGIN){
            return (
         
                <div>
                <LOGIN user={this.props.user}/>         
                </div>
                
               );

        }
        if(this.props.page == InfoPage){
            return (
         
                <div>
                <InfoPage/>         
                </div>
                
               );

        }
        if(this.props.page == User){
            return (
         
                <div>
                <User/>         
                </div>
                
               );

        }


}
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page:InfoPage};
        this.changeLoginPage = this.changeLoginPage.bind(this)
        this.changeUserPage = this.changeUserPage.bind(this)
        this.changeInfoPage = this.changeInfoPage.bind(this)
      }

    changeLoginPage(){
        this.setState({page:LOGIN});
    }
    changeUserPage(){
        this.setState({page:User});
    }
    changeInfoPage(){
        this.setState({page:InfoPage});
    }
    render() {
        return (
         
        <div>
        <ButtonAppBar pageLogin={this.changeLoginPage} pageInfo={this.changeInfoPage} ></ButtonAppBar>
        <PAGE page={this.state.page} user={this.changeUserPage}/>
        {/*  aqui va el pie  */}
        <div>
         
        </div>
        </div>
       );


}
}