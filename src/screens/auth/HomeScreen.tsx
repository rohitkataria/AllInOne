import React, { Component } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AllNavParamList } from '../../routes/AppRoutesList';
import { inject, observer } from 'mobx-react';
import { UserStore } from '../../stores';
import { action, observable } from 'mobx';
import { CustomButton } from '../../components';


type HomeScreenNavigationProp = StackNavigationProp<AllNavParamList, 'HomeScreen'>;
type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
    userStore: UserStore;
};

@inject('userStore')
@observer
class HomeScreen extends Component<HomeScreenProps> {
    @observable placeholderName = ''

    @action
    private onSubmit(name: string): void {
        this.placeholderName = name
        console.log("name>>>", name)
        console.log("pname>>>", this.placeholderName)
    }

    @action
    private moveToScreen(): void {
        const { navigation } = this.props;
        const data = 'badal'
        navigation.navigate('EmailScreen', { data, onSubmit: (name: string) => this.onSubmit(name) })
    }
    render() {
        const { userStore } = this.props
        userStore.setEmail('sohal@gmail.com');
        console.log("vgfvh", this.placeholderName)
        return (
            <View>
                <Text>Home screen </Text>
                <Text style={{ color: 'green' }}>{this.placeholderName}</Text>
                <Button
                    title="Press me"
                    onPress={() => this.moveToScreen()}
                />
             <CustomButton 
                borderColor= 'green'
                backgroundColor='green'
                text={`Button`}
                customStyle={{marginTop: 30,}}
                onPress={() => null}
                />
            </View>
        )
    }

}


export default HomeScreen;
