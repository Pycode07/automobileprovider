import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ResetPassword = () => {
    const [counter, setCounter] = useState(59);
    useEffect(() => {
        const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 0, height: 250, backgroundColor: '#02024A' }}>

            </View>
            <ScrollView style={{ flex: 1, backgroundColor: '#fff', position: 'absolute', left: 25, right: 25, top: 120, borderRadius: 20, zIndex: 99, paddingTop: 60, paddingHorizontal: 20 }}>
                <View style={{ marginBottom: 15 }}>
                    <View style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, marginLeft: 10, backgroundColor: '#fff', bottom: -6, zIndex: 2, }}>
                        <Text style={{ fontSize: 11, color: '#898b8c' }}>Enter Otp</Text>
                    </View>
                    <TextInput
                        placeholder='0000'
                        placeholderTextColor='#02024A'
                        style={{ width: '100%', borderWidth: 1, borderColor: '#02024A', borderRadius: 5, paddingVertical: 6, fontSize: 11, paddingHorizontal: 15 }}
                        keyboardType='phone-pad'
                    />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <View style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, marginLeft: 10, backgroundColor: '#fff', bottom: -6, zIndex: 2, }}>
                        <Text style={{ fontSize: 11, color: '#898b8c' }}>New Password</Text>
                    </View>
                    <TextInput
                        placeholder='password'
                        placeholderTextColor='#02024A'
                        style={{ width: '100%', borderWidth: 1, borderColor: '#02024A', borderRadius: 5, paddingVertical: 6, fontSize: 11, paddingHorizontal: 15 }}
                    />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <View style={{ alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, marginLeft: 10, backgroundColor: '#fff', bottom: -6, zIndex: 2, }}>
                        <Text style={{ fontSize: 11, color: '#898b8c' }}>Confirm Password</Text>
                    </View>
                    <TextInput
                        placeholder='password'
                        placeholderTextColor='#02024A'
                        style={{ width: '100%', borderWidth: 1, borderColor: '#02024A', borderRadius: 5, paddingVertical: 6, fontSize: 11, paddingHorizontal: 15 }}

                    />
                </View>
                <View style={{ flex: 0, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Text style={{ color: 'red', fontSize: 13, fontWeight: '400' }}>Resend Otp in {counter}s</Text>
                </View>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, marginVertical: 35 }}>
                    <Text style={{ fontSize: 20, color: '#02024A', fontWeight: '600' }}>Save</Text>
                    <Ionicons name='arrow-forward-circle-sharp' size={35} color='#02024A' />
                </View>

            </ScrollView>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({


})