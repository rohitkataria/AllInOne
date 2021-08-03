import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { observable } from 'mobx';

type EmailScreenNavigationProp = StackNavigationProp<AllNavParamList, 'EmailScreen'>;
type ScreenRouteProps = RouteProp<AllNavParamList, 'EmailScreen'>;

type EnterEmailScreenProps = {
    navigation: EmailScreenNavigationProp;
    route: ScreenRouteProps;
};

class EmailScreen extends Component<EnterEmailScreenProps> {
    @observable song = 'string'
    render() {
        const { navigation, route } = this.props
        const { data } = route.params;
        return (
            <View>
                <Text>Enter Email Screen {data}</Text>
                <Text>{this.song}</Text>
            </View>
        )
    }
}

export default EmailScreen;
