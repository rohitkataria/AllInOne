import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';


type HomeScreenNavigationProp = StackNavigationProp<AllNavParamList, 'HomeScreen'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    userStore: UserStore;
};

@inject('userStore')
@observer
class HomeScreen extends Component<HomeScreenProps> {
    render() {
        const { navigation, userStore } = this.props
        const data = 'badal'
        userStore.setEmail('sohal@gmail.com');
        return (
            <View>
                <Text>Home screen</Text>
                <Button
                    title="Press me"
                    onPress={() => navigation.navigate('EmailScreen', { data })}
                />
            </View>
        )
    }
}

export default HomeScreen;
