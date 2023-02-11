import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  BackHandler,
  StatusBar,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import {colors} from '../assets/colors';
import Header from '../components/Header';
import {api_url, brands} from '../config/Constant';
import {Loader} from '../components/Loader';

const SelectYourCar = props => {
  const [carsModel, setCarsModel] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    get_cars_modal();
  }, [props.navigation]);

  const get_cars_modal = () => {
    setIsLoading(true);
    try {
      axios.get(api_url + brands).then(response => {
        setIsLoading(false);
        setCarsModel(response.data);
        setMasterDataSource(response.data);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.brand_name
          ? item.brand_name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setCarsModel(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setCarsModel(masterDataSource);
      setSearch(text);
    }
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Select Car" navigation={props.navigation} />;
      },
    });
  }, []);
  const renderSearch = () => {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.searchparent}>
          <TouchableOpacity style={styles.searchIconView}>
            <AntDesign name="search1" color={colors.theme_black5} size={20} />
          </TouchableOpacity>
          <View style={[styles.input, styles.shadowProp]}>
            <TextInput
              placeholder="Select car model by brand..."
              placeholderTextColor={'#B3B4B7'}
              value={search}
              onChangeText={text => {
                searchFilterFunction(text);
              }}
              style={{
                fontSize: 14,
                color: 'black',
                paddingVertical: 0,
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  };
  return (
    <View style={styles.maincontainer}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <Loader isVisible={isLoading} />
      <View style={styles.mainSearch}>{renderSearch()}</View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: colors.theme_white,
            marginHorizontal: 19,
            width: width * 0.9,
            elevation: 8,
            shadowColor: colors.theme_black4,
            padding: 5,
          }}>
          {carsModel &&
            carsModel.map((item, index) => (
              <View
                key={item.brand_id}
                style={{
                  borderColor: '#D6D6D6',
                  padding: 1,
                  backgroundColor: colors.theme_black1,
                  margin: 5,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('carModalSelection', {
                      brand_id: item.brand_id,
                    });
                  }}>
                  <Image
                    source={{uri: item.logo}}
                    style={{
                      height: width * 0.18,
                      width: width * 0.182,
                      backgroundColor: 'white',
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
    </View>
  );
};

export default SelectYourCar;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: colors.theme_yellow1,
    paddingBottom: 20,
  },
  backArrow: {
    height: height * 0.1,
    width: width * 0.9,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  tital: {
    height: height * 0.06,
    width: width * 0.7,
    justifyContent: 'center',
  },
  mainSearch: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  searchparent: {
    width: width * 0.9,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: colors.theme_black4,
    height: 45,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchIconView: {
    height: height * 0.06,
    width: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  BottombannerLogo: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  datalist: {
    height: height * 0.1,
    width: width * 0.25,
    borderWidth: 1,
  },
});
