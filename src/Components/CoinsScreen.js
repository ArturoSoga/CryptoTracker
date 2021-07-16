import React, { Component } from 'react';
import {View,Text,FlatList,ActivityIndicator,StyleSheet} from 'react-native';

import Http from './Http.js';

import CoinsItem from './CoinItem.js';

import Colors from './Colors.js';

class CoinsScreen extends Component{

    state = {
        coins: [],
        loading:false
       }

    componentDidMount = async () => {
        this.setState({loading:true});

        const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
        this.setState({coins: res.data,loading:false})
        console.log(res);
    }

render(){

    const { coins , loading } = this.state;

    return(        
        <View style={styles.container}>
            {loading ? <ActivityIndicator color="#fff" size="large" /> : null }
            <FlatList 
             data={coins}
             renderItem={({ item }) => 
            <CoinsItem  item={item} />
            }
            />
        </View>
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.charade
    }
})

export default CoinsScreen;