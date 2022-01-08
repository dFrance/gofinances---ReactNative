import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { useTheme } from 'styled-components'

import { Dashboard } from '../screens/Dashboard'
import { Register } from '../screens/Register'
import { Resume } from '../screens/Resume';
import { SignIn } from '../screens/SignIn';

export function AppRoutes() {
    const { colors, fonts } = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 50,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                },
            }}
        >
            <Screen
                name="Listagem"
                // component={Dashboard}
                component={SignIn}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name="Cadastro"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="attach-money"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Screen
                name="Resumo"
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}