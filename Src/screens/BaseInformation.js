import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';
import {ImagePath} from '../utils/ImagePath';
import {COLOR} from '../utils/Colors';

const {height, width} = Dimensions.get('window');

const BaseInformation = props => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 10}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.backbtn}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={ImagePath.BlACK_BACK_ARROW}
              style={{height: 25, width: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titaltxxt}>
          <Text style={{color: COLOR.BLACK, fontSize: 21, fontWeight: '700'}}>
            Base Information
          </Text>
        </View>
      </View>

      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          What Kind of car services do you provide?
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Regular Service"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          style={{marginVertical: 5, marginLeft: 10}}
          //// onPress={(isChecked: boolean) => {}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Washing and Detailing"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          style={{marginVertical: 5, marginLeft: 10}}
          //// onPress={(isChecked: boolean) => {}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Wheel Alignment and Balancing"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          style={{marginVertical: 5, marginLeft: 10}}
          //onPress={(isChecked: boolean) => {}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Mechanical Repairs"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          //// onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Body Repairs"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          //// onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Engine Scanning"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          //// onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Electrical Repairs"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          //onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Ac Services"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          //// onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>What Kind of car do you serve?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Chevrolet"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Honda"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Flat"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="KIA"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Nissan"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="TATA"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Daewoo"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Force"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Hyundai"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Mahindra"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Opel"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Toyota"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Datsun"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Ford"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="ISUZU"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Maruti Suzuki"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Renault"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Volkswagen"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="DC"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Hindustan"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Jeep"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Mitsuishi"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="HindSkodaustan"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Volvo"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>Luxury Brand</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Aston Martin"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Jaguar"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Mercedes Benz"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Audi"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Land Rover"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Mini"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="BMW"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Maserati"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Porsche"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>Engine Variant</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Diesel"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Petrol"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="CNG"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Electrical"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>Transmission Type</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Automatic"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Manual"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>How many bays you have?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="1-2"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="3-5"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="6-10"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="more than 10"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          How many technicians/mechanics do you have?
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="3-5"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="6-10"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="10-20"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="more than 20"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>Do you service high end cars?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          Do you require inventories form the Company?
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          Do you currently or are you willing to provide Doorstep car Service?
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          Will you be able to provide Pickup/Drop Service under exceptional
          circumstances?
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>Do you accept card payments?</Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.headinView}>
        <Text style={styles.headingText}>
          Do you currently use any software for Garage Management & Invoicing??
        </Text>
      </View>
      <View style={styles.checkBoxContainer}>
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="Yes (Please specify)"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
        <BouncyCheckbox
          size={20}
          fillColor="#02024A"
          unfillColor="#FFFFFF"
          text="No, but I'm willing to use someo"
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
          // onPress={(isChecked: boolean) => {}}
          style={{marginVertical: 5, marginLeft: 10}}
        />
      </View>
      <View style={styles.Nxtbtn}>
        <CustomButton
          title={'Next'}
          ButtonPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

export default BaseInformation;

const styles = StyleSheet.create({
  // ===========Tital ========
  header: {
    height: height * 0.1,
    width: width * 0.99,
    // borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'navy'
  },
  backbtn: {
    height: height * 0.05,
    width: width * 0.2,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titaltxxt: {
    height: height * 0.05,
    width: width * 0.6,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //=+======== End ===
  headinView: {
    flex: 0,
    marginVertical: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  checkBoxContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  iconStyle: {
    borderColor: '#02024A',
    marginRight: -10,
    borderRadius: 5,
  },
  textStyle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 13,
    color: '#02024A',
    textDecorationLine: 'none',
  },
  boncyContainer: {
    marginVertical: 5,
  },
  Nxtbtn: {
    height: height * 0.2,
    width: width * 0.9,
    // borderWidth: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
