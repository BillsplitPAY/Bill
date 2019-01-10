import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import t from 'tcomb-form-native';
import firebase from 'firebase';

const Form = t.form.Form;

const User = t.struct({
  firstName: t.maybe(t.String)|| 'Aynonmous',
  lastname: t.maybe(t.String) || 'Aynonmous',
  email: t.String,
  // username: t.String,
  password: t.String,
  //terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    // terms: {
    //   label: 'Agree to Terms',
    // },
  },
  stylesheet: formStyles,
};

export default class signUp extends Component {
    static navigationOptions = {
         drawerLabel: 'Sign Up',   
    }

  handleSubmit = () => {
    console.log('can you handle it?!!?')
    const value = this._form.getValue();
    console.log('value: ', value);
    
    let email = value.email
    let password = value.password 
 
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (data) => {
      let userId = data.user.uid
      firebase.database().ref('Users/' + userId).set(value).then((data)=>{
          //success callback
          console.log('sent the follow to the Usersdb' , value)
      }).catch((error)=>{
          //error callback
          console.log('error ' , error)
      })
    }).catch( (err) => {
      console.log('ERROR!!!!!%#', err)
    })


  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Sign Up"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
