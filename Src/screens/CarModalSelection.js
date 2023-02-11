import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect} from 'react';
import {colors} from '../assets/colors';
import Header from '../components/Header';
import {api_url, vehicles_brand} from '../config/Constant';
import {Loader} from '../components/Loader';
import {useState} from 'react';
const {height, width} = Dimensions.get('window');

const CarModalSelection = props => {
  const Item = ({item}) => (
    <Pressable
      onPress={() => {
        props.navigation.navigate('spareParts', {
          carData: item,
        });
      }}
      key={item.vehicle_id}
      style={{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 7,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 5,
        width: width * 0.85,
        alignSelf: 'center',
      }}>
      <View
        style={{
          backgroundColor: colors.theme_black1,
          width: 70,
          height: 55,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: item.image}}
          style={{width: 65, height: 48}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          color: colors.theme_blue1,
          fontFamily: 'FuturaMediumBT',
          marginLeft: 15,
          textTransform: 'capitalize',
        }}>
        {item.model}
      </Text>
    </Pressable>
  );

  const [carList, setCarList] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerLeft: () => {
        return <Header title="Select Car" navigation={props.navigation} />;
      },
    });
  }, []);
  const renderItem = ({item}) => <Item item={item} />;
  const get_cars_modal = () => {
    setIsLoading(true);
    try {
      axios
        .post(api_url + vehicles_brand, {
          brand_id: props.route.params.brand_id,
        })
        .then(response => {
          setIsLoading(false);
          setCarList(response.data);
          setMasterDataSource(response.data);
        });
    } catch (error) {
      setIsLoading(true);
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
        const itemData = item.model
          ? item.model.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setCarList(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setCarList(masterDataSource);
      setSearch(text);
    }
  };

  React.useEffect(() => {
    get_cars_modal();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.theme_yellow1,
        paddingBottom: 20,
      }}>
      <StatusBar
        backgroundColor={colors.theme_yellow1}
        barStyle="light-content"
      />
      <Loader isVisible={isLoading} />
      <View
        style={{
          flex: 0,
          marginHorizontal: 15,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 10,
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            height: 50,
            justifyContent: 'center',
            elevation: 8,
            shadowColor: colors.theme_black2,
          }}>
          <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="search1" color={colors.theme_black5} size={20} />
            <TextInput
              placeholder="Select by car model by brand..."
              value={search}
              onChangeText={text => {
                searchFilterFunction(text);
              }}
              style={{
                fontSize: 12,
                paddingVertical: 5,
                left: 5,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 1, elevation: 0, marginHorizontal: 15}}>
        {carList.length > 0 && (
          <FlatList
            data={carList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={{
              flex: 0,
              elevation: 10,
              backgroundColor: colors.theme_white,
              shadowColor: colors.theme_black2,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default CarModalSelection;
