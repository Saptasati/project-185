import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Platform,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';


import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';



export default class Main extends React.Component {


	render() {
	
		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.headingContainer}>
                <Text style={styles.titleText}>Look Me...</Text>
          	</View>
          <View style={styles.contentContainer}>

        <View style={styles.c1}>
          <Text style={styles.contentText}>Look Me is the best photo filter app with pic with funny camera effects.With the stunning live photos filters directly on your face!!</Text>
        </View>
        
          <View style={styles.c2}>
          <View style={styles.c1}>
          <Image style={styles.c3} source={require("../assets/filter1.png")}/>
          </View>
          
          <View style={styles.c1}>
          <Image style={styles.c3} source={require("../assets/filter2.png")}/>
          </View>
          </View>

          <View style={styles.c2}>
          <View style={styles.c1}>
          <Image style={styles.c3} source={require("../assets/filter3.png")}/>
          </View>
          
          <View style={styles.c1}>
          <Image style={styles.c3} source={require("../assets/filter4.png")}/>
          </View>
          </View>

        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate("Main")}>
        <Text style={styles.buttonText}>Try Now</Text>
        </TouchableOpacity>
        </View>  
			</View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    contentContainer: {
        flex: 0.6,
        margin: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: "100%",
        padding: RFValue(20)
    },
    contentText: {
        fontSize: RFValue(17),
        fontStyle: 'italic',
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "white",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(25),
        fontStyle: 'italic',
        color: "pink",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1
    },
    c1: {
      flex: 0.5,
    },
    c2: {
      flexDirection: "row",
      flex: 0.25,
    },
    c3: {
      height: 45,
      width: 95,
    }
});