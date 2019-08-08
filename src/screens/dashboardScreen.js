import React, { Component } from 'react'
import { 
  Text, 
  View,
  StyleSheet,
  Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { BarChart, LineChart } from 'react-native-chart-kit'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const data = {
  labels: [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ],

  datasets: [
    {
      data: [ 8, 8, 7, 8, 9, 8, 0, 0 ]
    },
  ],
}

export default class dashboardScreen extends Component {
  render() {
    return (
      <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.first}>
            <Text style={[styles.text, styles.topText]}>
              Weekly Time Spent
            </Text>
            <Text style={[styles.text, styles.inHours]}>
              IN HOURS
            </Text>
            <View style={styles.graph}>
              <LineChart
                data={data}
                width={WIDTH - 48}
                height={200}
                chartConfig={{
                  backgroundColor: '#000',
                  backgroundGradientFrom: '#eff3ff',
                  backgroundGradientTo: '#efefef',
                  decimalPlaces: 2,
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                style={{
                  marginHorizontal: 10,
                  marginTop: 10,
                  borderRadius: 16,
                }}
              />
            </View>
            <View style={styles.firstBottom}>
              <Text style={[styles.text, styles.totalHours]}>
                48 hours
              </Text>
              <View style={styles.btnView}>
                <Button transparent>
                  <Text style={styles.timesheetBtn}>
                    GO TO TIMESHEET PAGE
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={styles.second}>
            <Text style={[styles.text, styles.topText]}>
              Remaining Annual Leave
            </Text>
            <View style={styles.remainingAnnualLeaveView}>
              <Text style={styles.remainingAnnualLeaveText}>
                8 days
              </Text>
            </View>
            <View style={styles.btnView}>
              <Button transparent>
                <Text style={styles.timesheetBtn}>
                  GO TO LEAVE PAGE
                </Text>
              </Button>
              </View>
          </View>
          <View style={styles.third}>
            <Text style={[styles.text, styles.topText]}>
              Remaining Medical Reimbursement
            </Text>
            <View style={styles.remainingMedicalBalanceView}>
              <Text style={styles.remainingMedicalBalanceText}>
                Rp2.500.000,00
              </Text>
            </View>
          </View>
          <View style={styles.fourth}>
            <Text style={[styles.text, styles.topText]}>
              Total Debt
            </Text>
            <View style={styles.totalDebtView}>
              <Text style={styles.totalDebtText}>
                3 hours
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Button style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>+</Text>
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f2f2f2",    
  },
  first:{
    flex: 1,
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 25,
    height: 300,
    borderRadius: 16
  },
  second:{
    flex: 1,
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 15,
    height: 125,
    borderRadius: 16
  },
  third:{
    flex: 1,
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 15,
    height: 125,
    borderRadius: 16
  },
  fourth:{
    flex: 1,
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 15,
    height: 100,
    borderRadius: 16
  },
  firstBottom:{
    flexDirection: 'row'
  },
  graph:{
    height: 220,
    width: WIDTH,
    alignContent: 'center',
  },
  text:{
    marginHorizontal: 15
  },
  topText:{
    fontWeight: 'bold',
    marginTop: 5
  },
  inHours:{
    fontWeight: 'bold',
    fontSize: 10
  },
  totalHours:{
    fontSize: 17.5
  },
  btnView:{
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginHorizontal: 15
  },
  timesheetBtn:{
    color: '#3CBE92',
    fontWeight: 'bold',
    fontSize: 10
  },
  remainingAnnualLeaveView:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    width: WIDTH - 48
  },
  remainingAnnualLeaveText:{
    alignSelf: 'center',
    fontSize: 32,
    marginTop: 16,
  },
  remainingMedicalBalanceView:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    width: WIDTH - 48
  },
  remainingMedicalBalanceText:{
    alignSelf: 'center',
    fontSize: 24,
  },
  totalDebtView:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    height: 60,
    width: WIDTH - 48
  },
  totalDebtText:{
    alignSelf: 'center',
    fontSize: 24,
  },
  buttonStyle : {
    backgroundColor: '#0072C6',
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  buttonTextStyle : {
    color:'white',
    fontSize: 45,
    marginBottom: 6
  }
})