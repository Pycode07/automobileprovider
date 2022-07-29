import { ImageBackground, StyleSheet, Text, Dimensions, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { ImagePath } from '../../utils/ImagePath';
import { FONTS } from '../../utils/FontFamily';
const { height, width } = Dimensions.get("screen");

const WalletHeader = (props) => {
    const { backIcon,
        onBackPress,
        AuthLogo,
        AUTHLOGO,
        Title,
        HeaderTitle,
        rightIcon,
        Drawer,
        onDrawerPress,
        RightIconPress,
        RightIconTwo,
        Profile,
        Faq,
        RightIconTwoPress } =
        props;
    return (
        <View style={{ backgroundColor: "#1D6DFD", height: height * 0.15, width: width * 1 }}>
            <ImageBackground resizeMode="stretch" source={ImagePath.BACKHEADER} style={{ paddingTop: 20, flexDirection: "row", height: height * 0.18, width: width * 1 }}>
                {backIcon ?
                    <View style={{
                        // backgroundColor: "green",
                        justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.13
                    }}>
                        <TouchableOpacity onPress={onBackPress} style={{
                            // backgroundColor: "green",
                            justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.15
                        }}>
                            <Image source={ImagePath.BACKICON} resizeMode="contain" style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>
                    :
                    Drawer ?
                        <View style={{
                            // backgroundColor: "green",
                            justifyContent: "center", alignItems: "flex-end", height: height * 0.08, width: width * 0.13
                        }}>
                            <TouchableOpacity onPress={onDrawerPress}>
                                <Image source={ImagePath.DRAWER} resizeMode="contain" style={{ height: 30, width: 30 }} />
                            </TouchableOpacity>
                        </View>
                        : null
                }
                {HeaderTitle ?
                    <View style={{
                        // backgroundColor: "red",
                        justifyContent: "flex-end", alignItems: "flex-end", height: height * 0.08, width: width * 0.64
                    }}>
                        <View style={{
                            // backgroundColor: "blue",
                            justifyContent: "center", alignItems: "center", height: height * 0.08, width: width * 0.52
                        }}>
                            <Text style={{ fontFamily: FONTS.PoppinsRegular, color: "#FFFFFF", fontSize: height / 35 }}>{Title}</Text>
                        </View>
                    </View> : null}
                {rightIcon ?
                    <View style={{
                        // backgroundColor: "orange",
                        height: height * 0.08, width: width * 0.1,
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>
                        <TouchableOpacity onPress={RightIconPress} >
                            <Image source={ImagePath.BANK} resizeMode="contain" style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>
                    : null}
                {RightIconTwo ?
                    <View style={{
                        // backgroundColor: "yellow",
                        height: height * 0.08, width: width * 0.13,
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>
                        <TouchableOpacity onPress={RightIconTwoPress} >
                            <Image source={ImagePath.FAQ} resizeMode="contain" style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    </View>
                    : Faq ?
                        <View style={{
                            // backgroundColor: "yellow",
                            height: height * 0.08, width: width * 0.13,
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}>
                            <TouchableOpacity onPress={RightIconTwoPress}>
                                <Image source={ImagePath.FAQ} resizeMode="contain" style={{ height: 30, width: 30 }} />
                            </TouchableOpacity>
                        </View>
                        : Profile ?
                            <View style={{
                                // backgroundColor: "yellow",
                                height: height * 0.08, width: width * 0.13,
                                justifyContent: "center",
                                alignItems: "flex-start"
                            }}>
                                <TouchableOpacity onPress={RightIconTwoPress}>
                                    <Image source={ImagePath.FAQ} resizeMode="contain" style={{ height: 30, width: 30 }} />
                                </TouchableOpacity>
                            </View>
                            : null

                }
            </ImageBackground>
        </View >
    )
}

export default WalletHeader

const styles = StyleSheet.create({})