import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useToken } from 'native-base';
import {Ionicons} from '@expo/vector-icons'


import { Home } from '../pages/home';
import { Favorites } from '../pages/favorites';

const Routes = () => {

    const [violet, white] = useToken('colors', ['violet.900','white.50'])

    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: violet, 

            tabBarStyle: {
                backgroundColor: white,
                borderTopWidth: 0,
            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="home" color={violet} size={size} />
                        }
                        return <Ionicons name="home-outline" color={violet} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Favorites" 
                component={Favorites} 
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if(focused){
                            return <Ionicons name="heart" color={violet} size={size} />
                        }
                        return <Ionicons name="heart-outline" color={violet} size={size} />
                    }
                }}
                />
        </Tab.Navigator>
    )
}

export default Routes