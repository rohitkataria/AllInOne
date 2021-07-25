import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Text } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';

type EmailScreenNavigationProp = StackNavigationProp<AllNavParamList, 'EmailScreen'>;
type ScreenRouteProps = RouteProp<AllNavParamList, 'EmailScreen'>;

type EnterEmailScreenProps = {
    navigation: EmailScreenNavigationProp;
    route: ScreenRouteProps;
};

class EmailScreen extends Component<EnterEmailScreenProps> {
    render() {
        const { navigation, route } = this.props
        const {data} = route.params;
        return (
            <Text>Enter email screen {data}</Text>
        )
    }
}

export default EmailScreen;
