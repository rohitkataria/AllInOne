import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';



type EmailScreenNavigationProp = StackNavigationProp<AllNavParamList, 'EmailScreen'>;
type ScreenRouteProps = RouteProp<AllNavParamList, 'EmailScreen'>;

type EnterEmailScreenProps = {
    navigation: EmailScreenNavigationProp;
    route: ScreenRouteProps;
    userStore: UserStore;
};
@inject('userStore')
@observer
class EmailScreen extends Component<EnterEmailScreenProps> {
    @observable song = 'string'
    render() {
        const { route, userStore } = this.props
        const { data } = route.params;
        const { email } = userStore;
        return (
            <View>
                <Text>Enter Email Screen  {data}</Text>
                <Text>{this.song}</Text>
                <Text>{email}</Text>
            </View>
        )
    }
}

export default EmailScreen;
