import { Stack } from 'expo-router'; //Page A -> Page B -> Back
import { TouchableOpacity } from 'react-native'; //A pressable button.
import { Ionicons } from '@expo/vector-icons';


export default function ProductLayout(){ //This layout automatically wraps screens in that folder.
     return (
        <Stack>
            <Stack.Screen 
                name='[slug]'
                options={( {navigation} )=> ({
                    headerShown:true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={ ()=> navigation.goback() }>
                         <Ionicons name = "arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}
            />
        </Stack>
    );
}