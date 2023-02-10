import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../assets/colors';
import {api_url, driver_register_new, fonts} from '../config/Constant';
import Header from '../components/Header';
import {useState} from 'react';
import axios from 'axios';

const Register = props => {
  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Register" navigation={props.navigation} />;
      },
    });
  }, []);

  // ==========  single select state =============
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [marid, setMarid] = useState(false);
  const [unmerid, setUnmerid] = useState(false);

  const [onwe, setOwned] = useState(false);
  const [rented, setRented] = useState(false);

  const [birthDateVisibality, setBirthDateVisibality] = React.useState(false);
  const [birthDate, setBirthDate] = React.useState('Select a date');
  const [currentBirthDate, setCurrentBirthDate] = React.useState(new Date());
  // ==========  single select state End =============

  // ==========  Validaiton start here ========== =============

  const [FirstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(null);

  const [surName, setsurName] = useState('');
  const [errorsurName, setErrorsurName] = useState(null);

  const [fatherName, setFatherName] = useState('');
  const [errorfatherName, setErrorFatherName] = useState(null);

  const [date, setdate] = useState('');
  const [errordate, setErrordate] = useState('');

  const [Phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);

  const [Adhar, setAdhar] = useState('');
  const [errorAdhar, setErrorAdhar] = useState(null);

  const [Pan, setPan] = useState('');
  const [errorPan, setErrorPan] = useState(null);

  const [area, setArea] = useState('jbjhh');
  const [errorArea, setErrorArea] = useState(null);

  const [city, setCity] = useState('bvhgcgf');
  const [errorCity, setErrorCity] = useState(null);

  const [pin, setPin] = useState('hhgfg');
  const [errorPin, setErrorPin] = useState(null);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const [secandryMobileNumber, setSecandryMobileNumber] = useState('');

  const [age, setAge] = React.useState('');

  const setTravelingDateFromPicker = (d, date) => {
    if (d.type === 'set') {
      setBirthDateVisibality(false);
      setBirthDate(date);
      setCurrentBirthDate(date);
      calculateAge(date);
    } else {
      setBirthDateVisibality(false);
    }
  };

  const _validateFirstName = fname => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == '' || fname == undefined || fname == null) {
      setErrorFirstName('*Please enter first name.');
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName('*Please enter valid first name.');
    } else {
      setErrorFirstName(null);
    }
  };
  const _validatesurName = lname => {
    var lnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (lname == '' || lname == undefined || lname == null) {
      setErrorsurName('*Please enter Surname.');
    } else if (!lnameRegex.test(lname)) {
      setErrorsurName('*Please enter valid surname.');
    } else {
      setErrorsurName(null);
    }
  };

  const _validateFatherName = fatname => {
    var fathernameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fatname == '' || fatname == undefined || fatname == null) {
      setErrorFatherName('*Please enter father name.');
    } else if (!fathernameRegex.test(fatname)) {
      setErrorFatherName('*Please enter valid father name.');
    } else {
      setErrorFatherName(null);
    }
  };

  const _Datevalidate = date => {
    var DateRegex = /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/;
    if (date === '') {
      setErrordate('*Please enter correct Dob.');
    } else if (!DateRegex.test(date)) {
      setErrordate('*Please enter valid Dob.');
    } else {
      setErrordate(null);
    }
  };

  const _Phonevalidate = Phone => {
    var PhoneRegex = /^([0-9]){10,14}$/;
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
    } else if (!PhoneRegex.test(Phone)) {
      setErrorPhone('*Please enter valid Phone Number.');
    } else {
      setErrorPhone(null);
    }
  };

  const _Panvalidate = Pan => {
    var PanRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (Pan === '') {
      setErrorPan('*Please enter Pan card number.');
    } else if (!PanRegex.test(Pan)) {
      setErrorPan('*Please enter valid Pan card Number.');
    } else {
      setErrorPan(null);
    }
  };

  const _Adharvalidate = adhar => {
    var AdharRegex = /^\d{4}\d{4}\d{4}$$/;
    var PassportRegex = /^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$/;
    var VoterRegex = /^([a-zA-Z]){3}([0-9]){7}?$/;
    var DLRegex =
      /^(([A-Z]{2}[0-9]{2})|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/;

    if (adhar === '') {
      setErrorAdhar('*Please enter Anyone.');
    } else if (
      !(
        AdharRegex.test(adhar) |
        PassportRegex.test(adhar) |
        VoterRegex.test(adhar) |
        DLRegex.test(adhar)
      )
    ) {
      setErrorAdhar('*Please enter correct Details.');
    } else {
      setErrorAdhar(null);
    }
  };

  const _Areavalidate = area => {
    var areaRegex =
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (area === '') {
      setErrorArea('*Enter area name.');
    } else if (!areaRegex.test(area)) {
      setErrorArea('*this feild is require.');
    } else {
      setErrorArea(null);
    }
  };

  const _Cityvalidate = pin => {
    var cityRegex =
      /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if (pin === '') {
      setErrorCity('*this feild is require.');
    } else if (!cityRegex.test(pin)) {
      setErrorCity('* this feild is require.');
    } else {
      setErrorCity(null);
    }
  };

  const _Pinvalidate = pin => {
    var pinRegex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if (pin === '') {
      setErrorPin('*Enter area Pincode.');
    } else if (!pinRegex.test(pin)) {
      setErrorPin('*Enter valid Pincode.');
    } else {
      setErrorPin(null);
    }
  };

  const validate = () => {
    let flag = true;
    if (FirstName === '') {
      setErrorFirstName('*Please enter First Name.');
      flag = false;
    }

    if (surName === '') {
      setErrorsurName('*Please enter Surname Name');
      flag = false;
    }

    if (fatherName === '') {
      setErrorFatherName('*Please enter Father Name');
      flag = false;
    }

    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
      flag = false;
    }

    if (birthDate === 'Select a date') {
      setErrordate('*Please enter DOB.');
      flag = false;
    }

    if (Pan === '') {
      setErrordate('*Please enter Pan No.');
      flag = false;
    }

    if (Adhar === '') {
      setErrorAdhar('*Please enter Any one Details.');
      flag = false;
    }

    if (area === '') {
      setErrorPin('*Enter area.');
      flag = false;
    }

    if (city === '') {
      setErrorPin('*Enter city.');
      flag = false;
    }

    if (pin === '') {
      setErrorPin('*Enter pincode.');
      flag = false;
    }

    if (email === '') {
      setErrorEmail('*Enter Email.');
      flag = false;
    }

    if (password === '') {
      setErrorPassword('*Enter Password.');
      flag = false;
    }
    return flag;
  };

  const onSubmit = async () => {
    if (validate()) {
      let fcmToken = 'qwerrtyuio';
      let PersonalData = {
        first_name: FirstName,
        last_name: surName,
        father_name: fatherName,
        date_of_birth: moment(birthDate).format('YYYY-MM-DD'),
        age: age,
        gender: male == true ? 1 : 2,
        relationship_status: marid == true ? 2 : 1,
        phone_number: Phone,
        fcm_token: fcmToken,
        phone_number2: secandryMobileNumber,
        pancard_num: Pan,
        id_proof: Adhar,
        address_type: onwe == true ? 1 : 2,
        city: 'none', //city,
        area: 'none', //area,
        pincode: 'none', //pin,
        email: email,
        password: password,
      };
      const responsePersonalityDetail = await axios.post(
        api_url + driver_register_new,
        PersonalData,
      );
      console.log('=======>', responsePersonalityDetail.data);
      if (responsePersonalityDetail) {
        let a = await AsyncStorage.setItem('email', email.toString());
        props.dispatch(
          UserAction.setUserData(responsePersonalityDetail.data.result),
        );
        props.navigation.navigate('GrageDetails');
      }
    } else {
      alert('Please Enter All Require Details');
    }
  };
  // ==========  Validaiton End  here ========== =============
  function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.theme_black0}}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
            
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
