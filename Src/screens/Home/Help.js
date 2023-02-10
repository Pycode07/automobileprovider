import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import axios from 'axios';
const {height, width} = Dimensions.get('window');
import {COLOR} from '../../utils/Colors';
import {ImagePath} from '../../utils/ImagePath';
import {colors} from '../../assets/colors';
import {api_url, get_faq_type} from '../../config/Constant';
const Help = props => {
  const [helpData, setHelpData] = React.useState(null);

  const [helpToggle, setHelpToggle] = React.useState(-1);

  const getHelpSupport = async () => {
    try {
      await axios({
        method: 'POST',
        url: api_url + get_faq_type,
        data: {
          type: 2,
        },
      }).then(response => {
        if (response.status == 200) {
          console.warn('jhvjhasd', response.data);
          setHelpData(response.data.response);
        } else {
          console.warn('to hard');
        }
      });
    } catch (e) {
      console.warn('hjgfjahsgd', e.message);
    }
  };

  React.useEffect(() => {
    getHelpSupport();
  }, []);
  return (
    <ScrollView style={{flex: 0, backgroundColor: '#fff'}}>
      <View style={{}}>
        <View
          style={{
            height: height * 0.1,
            width: width * 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.theme_yellow1,
          }}>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.22,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                source={ImagePath.BACK_ARROW}
                style={{height: 25, width: 25}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.55,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLOR.WHITE, fontSize: 22}}>Help</Text>
          </View>
        </View>

        <FlatList
          data={helpData}
          renderItem={({item, index}) => {
            const setHelp = () => {
              if (helpToggle == index) {
                setHelpToggle(-1);
              } else {
                setHelpToggle(index);
              }
            };
            return (
              <View style={{flex: 1, marginVertical: 5, marginHorizontal: 10}}>
                <TouchableOpacity
                  onPress={setHelp}
                  style={{
                    padding: 15,
                    backgroundColor: '#02024A',
                    opacity: 0.5,
                    borderRadius: 5,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
                    {item.question}
                  </Text>
                </TouchableOpacity>
                {helpToggle == index ? (
                  <TouchableOpacity style={{marginHorizontal: 20}}>
                    <Text
                      style={{fontSize: 14, fontWeight: '500', color: '#000'}}>
                      {item.answer}
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Help;
