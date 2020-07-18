import React, { useState, useEffect } from 'react'
import { View, FlatList,Text } from 'react-native'
import Axios from 'axios'


const App = () => {
  const [data, setData] = useState()
  var link = 'https://5e032d0763d08b0014a28d2b.mockapi.io/test7/user'
  useEffect(() => {
    Axios.get(link)
      .then(function (res) {
        setData(res)
      })
      .catch(function (e) {
        console.log(e)
      })
  })
  console.log('Data----->',data)
  return (
    <View>
      <Text>abc</Text>
    </View>
  )
}

export default App