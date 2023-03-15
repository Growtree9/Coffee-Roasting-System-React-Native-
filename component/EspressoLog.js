import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState, useLayoutEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EspressoLog = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    const insets = useSafeAreaInsets();

    const [formData, setFormData] = useState({
        bean: "",
    });

    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }}>
            <LinearGradient
                colors={['rgb(80, 138, 191)', 'rgb(78, 136, 189)', 'rgb(35, 95, 145)']}
                className="flex-row p-2 align-top h-[80px]"
            >
                <Text className="text-slate-50 text-xl font-semibold">
                    Bean:
                </Text>
                <View>
                    <TextInput
                        className="text-slate-50 text-xl pl-2 font-semibold"
                        name="bean"
                        multiline
                        onChangeText={newText => onChange("bean", newText)}
                        value={formData.bean}
                    />
                </View>
            </LinearGradient>
        </View>
    )
}

export default EspressoLog