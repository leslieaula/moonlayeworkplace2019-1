import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image } from 'react-native'
import bdProfile from '../assets/images/profile-backdrop.jpg'
import { Container, Item, Label, Form, Button, Icon } from 'native-base'
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import EmployeeResource from '../network/EmployeeResource';

export default class profileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      bankData: []
    }
  }

  getEmployeeDtoData(){
    this.setState({loading: true})

    EmployeeResource.getEmployeeDtoById(1)
    .then((res) => {
      this.setState({
        loading: false, 
        bankData: res.bank,
        workData: res.workPlacement,
        departmentData: res.department,
        positionData: res.positionTitle
      })
    }) 
    .catch((err) => {
      alert(err)
    });
  }

  getEmployeeData(){
    this.setState({loading: true})

    EmployeeResource.getEmployeeById(1)
    .then((res) => {
      this.setState({
        loading: false, 
        data: res.data
      })
    }) 
    .catch((err) => {
      alert(err)
    });
  }


  componentDidMount(){
    this.getEmployeeDtoData();
    this.getEmployeeData();
  }

  render() {
    return (
      <ScrollView>  
        <ImageBackground source={bdProfile} style={styles.top}>
          <Image  source={{uri: this.state.data.imageUrl}} style={styles.profilePhoto} />
        </ImageBackground>
        <View 
          style={styles.bottom}
          data={this.state.data}
          bankData={this.state.bankData}
        >
          <View style={styles.detailsTitleView}>
            <View style={styles.left}>
              <Text style={styles.detailsTitle}>PERSONAL DETAILS</Text>
            </View>
            <View style={styles.right}>
              <Button transparent onPress={() => this.props.navigation.push('ProfileEdit', {data: this.state.data})} style={styles.btnEdit}>
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </Button>
            </View>
          </View>
          <View style={styles.detailsView}>
            <Text  style={[styles.detailsLabel, styles.textDetail]}>Full Name</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.fullName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Gender</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.gender}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Current Address</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.currentAddress}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Handphone Number</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.phoneNumber}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Emergency Contact Name</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.emergencyContactName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Emergency Contact Number</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.emergencyContactNumber}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Personal Email</Text>
            <Text  style={[styles.detailsText, styles.textDetail, styles.last]}>{this.state.data.personalEmail}</Text>
          </View>
            
          <View style={styles.detailsTitleView}>
            <Text style={styles.detailsTitle}>EMPLOYEE DETAILS</Text>
          </View>
          <View style={styles.detailsView}>
            <Text  style={[styles.detailsLabel, styles.textDetail]}>Initial</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.initialName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Join Date</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.joinDate}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Moonlay Email</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.officeEmail}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Work Location</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.workData != null && this.state.workData.workLocation}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Office Address</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.workData != null && this.state.workData.officeAddress}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Department</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.departmentData != null && this.state.departmentData.departmentName}</Text>
              
            <Text  style={[styles.detailsLabel, styles.textDetail]}>Position Title</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.positionData != null && this.state.positionData.positionTitle}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Line Manager</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.data.lineManager}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Permanent/Contract</Text>
            <Text  style={[styles.detailsText, styles.textDetail, styles.last]}>{this.state.data.statusWorker}</Text>
          </View>

          <View style={styles.detailsTitleView}>
            <Text style={styles.detailsTitle}>BANK ACCOUNT DETAILS</Text>
          </View>
          <View style={styles.detailsView}>
            <Text  style={[styles.detailsLabel, styles.textDetail]}>Bank Name</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.bankData != null && this.state.bankData.bankName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Bank Branch</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.bankData != null && this.state.bankData.branchName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Account Holder Name</Text>
            <Text  style={[styles.detailsText, styles.textDetail]}>{this.state.bankData != null && this.state.bankData.receiverName}</Text>

            <Text  style={[styles.detailsLabel, styles.textDetail]}>Account Number</Text>
            <Text  style={[styles.detailsText, styles.textDetail, styles.last]}>{this.state.bankData != null && this.state.bankData.accountNumber}</Text>

          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: null,
    width: null,
    backgroundColor: '#DCDCDC',
  },
  top:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  profileBackdrop: {
    width: null,
    height: null
  },
  profilePhoto: {
    borderRadius: 200,
    height: 100,
    width: 100,
  },
  detailsTitleView: {
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  left:{
    flex:1
  },
  right:{
    flex:1,
    flexDirection:'row-reverse'
  },
  btnEdit:{
    height: 5
  },
  editButtonText:{
    color: '#62B1F6',
    fontWeight: 'bold',
    fontSize: 15
  },
  bottom:{
    backgroundColor: "#f2f2f2",
    alignContent:'flex-start'
  },
  detailsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsView:{
    backgroundColor: '#fcfcfc',
    marginVertical: 15
  },
  textDetail: {
    marginHorizontal: 15,
    fontSize: 15
  },
  detailsLabel:{
    marginTop: 15,
    fontWeight: 'bold'
  },
  detailsText:{
  },
  last:{
    marginBottom: 15
  }
})