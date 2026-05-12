import { Tabs } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';   // readymde icons

//reusable component called TabBarIcon that takes in props and returns a FontAwesome icon with the specified name and color. The size of the icon is set to 24, and the color is overridden to '#1BC464' regardless of the color passed in props.
function TabBarIcon( props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={24} {...props}style={{ color: '#1BC464' }}/>;
}


const TabsLayout = () => {
    return (
        <SafeAreaView edges={['top',]} style={Styles.safeArea}>
            <Tabs 
            screenOptions={{
                tabBarActiveTintColor:'#1BC464',
                tabBarInactiveTintColor:'gray',
                tabBarLabelStyle: { fontSize:16 },
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 30,
                },
                headerShown: false,
             }}
            >
            <Tabs.Screen 
            name='index' 
            options={{ 
                title: 'Shop',
               tabBarIcon(props){
                    return <TabBarIcon {...props} name='shopping-cart' />;
               },
            }} 
            />
            <Tabs.Screen
            name='orders' //match file name
            options={{ 
                title: 'Orders',
                tabBarIcon(props){
                    return <TabBarIcon {...props} name='book' />;
                },
            }} 
            />
            </Tabs>
        </SafeAreaView>
    );
};

export default TabsLayout;

const Styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});