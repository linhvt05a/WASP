import React, {useState, useEffect} from 'react'
import { Text, View } from 'react-native'

const Splash = (props) => {
    console.log(props)
    const [loading, setLoading] = useState(false)

      
    useEffect(()=>{
       
    },[])

    return(
       <>
           <View style={{flex: 1, backgroundColor:'red'}}>
           
            </View>
       </>
    )
}

export default Splash