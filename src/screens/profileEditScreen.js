import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet,
  ImageBackground,
  Image } from 'react-native'

import { Container, Item, Label, Form, Button, Icon, Content, Input, Picker } from 'native-base'
import ImagePicker from 'react-native-image-picker';
import EmployeeResource from '../network/EmployeeResource'

export default class profileEditScreen extends Component {

  constructor(props){
    super(props)
    this.data = this.props.navigation.getParam("data", null)

    this.state = {
      imageUrl : this.data.imageUrl,
      fullName : this.data.fullName,
      currentAddress :this.data.currentAddress,
      phoneNumber : this.data.phoneNumber,
      emergencyContactName : this.data.emergencyContactName,
      emergencyContactNumber : this.data.emergencyContactNumber,
      personalEmail : this.data.personalEmail
    }

  }

  saveChanges() {
    let body = {
      "imageUrl" : this.state.imageUrl,
      "fullName" : this.state.fullName,
      "currentAddress" : this.state.currentAddress,
      "phoneNumber" : this.state.phoneNumber,
      "emergencyContactName" : this.state.emergencyContactName,
      "emergencyContactNumber" : this.state.emergencyContactNumber,
      "personalEmail" : this.state.personalEmail
    }

    EmployeeResource.editEmployee(body, this.data.id)
    .then((res) => {
      this.updateForm();
      alert("Success")
    })
    .catch((err) => {
      alert(JSON.stringify(err))
    })
  }

  updateForm(){
    this.setState({
      imageUrl: "imageUrl",
      fullName: "fullName",
      currentAddress : "currentAddress",
      phoneNumber : "phoneNumber",
      emergencyContactName : "emergencyContactName",
      emergencyContactNumber : "emergencyContactNumber",
      personalEmail : "personalEmail"
    })
  }

  handleChoosePhoto = () => {
    
    this.state = {
      imageUrl : this.data.imageUrl
    }
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ 
          imageUrl: response.uri,
        });
      }
    });
  };

  render() {

    return (
        <Container>
            <View style={styles.top}>
                <Image  source={{uri: this.state.imageUrl}} style={styles.profilePhoto} />
                <View style={styles.btnView}>                
                  <Button transparent onPress={() =>  this.handleChoosePhoto()} style={styles.btnEdit}>
                    <Text style={styles.editButtonText}>Change Profile Photo</Text>
                  </Button>
                </View>
            </View>

            <Content>
                <Form>
                    <Item stackedLabel>
                        <Label>Full Name</Label>
                        <Input 
                          value={this.state.fullName}
                          onChangeText={(fullName) => this.setState({fullName})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Current Address</Label>
                        <Input 
                          value={this.state.currentAddress}
                          onChangeText={(currentAddress) => this.setState({currentAddress})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Handphone Number</Label>
                        <Input 
                          value={this.state.phoneNumber}
                          onChangeText={(phoneNumber) => this.setState({phoneNumber})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Emergency Contact Name</Label>
                        <Input 
                          value={this.state.emergencyContactName} 
                          onChangeText={(emergencyContactName) => this.setState({emergencyContactName})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Emergency Contact Number</Label>
                        <Input 
                          value={this.state.emergencyContactNumber} 
                          onChangeText={(emergencyContactNumber) => this.setState({emergencyContactNumber})}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label>Personal Email</Label>
                        <Input 
                          value={this.state.personalEmail}
                          onChangeText={(personalEmail) => this.setState({personalEmail})}
                        />
                    </Item>
                </Form>
                <View style={styles.btnView2}>                
                    <Button 
                      transparent 
                      onPress={() => {this.saveChanges(); this.props.navigation.navigate('Profile')}}
                    >
                      <Text style={styles.saveButtonText}>SAVE CHANGES</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  top:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    marginTop: 15
  },
  profilePhoto: {
    borderRadius: 200,
    height: 100,
    width: 100,
  },
  btnView:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  editButtonText:{
    color: '#62B1F6',
    fontSize: 15,
  },
  btnView2:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  saveButtonText:{
    color: '#62B1F6',
    fontSize: 15,
  },
})