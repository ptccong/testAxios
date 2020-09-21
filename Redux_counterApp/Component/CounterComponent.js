import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FECTH_SUCCES, FECTH_FAIL, ON_ADD_DATA, ON_FECTH } from '../Action/actionsType'



function CounterComponent(props) {
    const [username, setUser] = React.useState()
    const [password, setPass] = React.useState()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <TextInput placeholder='Nhập email' onChangeText={(tx) => setUser(tx)}></TextInput>
            <TextInput placeholder='Nhập password' onChangeText={(tx) => setPass(tx)}></TextInput>
            <Button title='Login' onPress={() => props.onFecth()} />
            <Button title='on Add Data' onPress={() => props.onAdd({name:'cong',old:'20'})} />
        </View>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        dem: state.data
    }
}
const mapDispacthToProps = (dispacth) => {
    return {
        onFecth: () => dispacth({ type: ON_FECTH }),
        onAdd: ({ name, old }) => dispacth({ type: ON_ADD_DATA, value: ({ name, old }) })
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(CounterComponent)
