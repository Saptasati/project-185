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

import * as Permissions from 'expo-permissions';

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

import Filter1 from './Filter1';
import Filter2 from './Filter2';
import Filter3 from './Filter3';
import Filter4 from './Filter4';
import Filter5 from './Filter5';
import Filter6 from './Filter6';
import Filter7 from './Filter7';
import Filter8 from './Filter8';
import Filter9 from './Filter9';
import Filter10 from './Filter10';


import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

let data = {
	crown: [
		{
			id: 'crown1',
			image: require('../assets/filter1.png'),
		},
    {
			id: 'crown2',
			image: require('../assets/filter2.png'),
		},
	],
	flower: [
		{
			id: 'flower1',
			image: require('../assets/filter3.png'),
		},
		{
			id: 'flower2',
			image: require('../assets/filter4.png'),
		},
	],
	hair: [
		{
			id: 'hair',
			image: require('../assets/filter5.png'),
		},
	],
	hat: [
		{
			id: 'hat1',
			image: require('../assets/filter6.png'),
		},
		{
			id: 'hat2',
			image: require('../assets/filter7.png'),
		},
	],
	tiara: [
		{
			id: 'tiara1',
			image: require('../assets/filter8.png'),
		},
    {
			id: 'tiara2',
			image: require('../assets/filter9.png'),
		},
    {
			id: 'tiara3',
			image: require('../assets/filter10.png'),
		},
		
	],
};

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
      current_filter: "filter_1",
      selected: "tiara"
		};
		this.onCameraPermission = this.onCameraPermission.bind(this);
		this.onFacesDetected = this.onFacesDetected.bind(this);
		this.onFaceDetectionError = this.onFaceDetectionError.bind(this);
	}

	componentDidMount() {
		Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission);
	}

	onCameraPermission({ status }) {
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	onFacesDetected({ faces }) {
		this.setState({ faces: faces });
	}

	onFaceDetectionError(error) {
		console.log(error);
	}

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.headingContainer}>
                <Text style={styles.titleText}>Look Me...</Text>
          	</View>
				<View style={styles.cameraStyle}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>
					{this.state.faces.map((face) => {
						if(this.state.current_filter === 'filter_1') {
              return <Filter1 key={face.faceID} face={face} />;
            } else if(this.state.current_filter === 'filter_2') {
              return <Filter2 key={face.faceID} face={face} />;
            } else if(this.state.current_filter === 'filter_3') {
              return <Filter3 key={face.faceID} face={face} />;
            } else if(this.state.current_filter === 'filter_4') {
              return <Filter4 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_5') {
              return <Filter5 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_6') {
              return <Filter6 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_7') {
              return <Filter7 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_8') {
              return <Filter8 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_9') {
              return <Filter9 key={face.faceID} face={face} />;
            } 
            else if(this.state.current_filter === 'filter_10') {
              return <Filter10 key={face.faceID} face={face} />;
            } 
					})}
				</View>
        <View style={styles.framesContainer} >
         <View style={styles.categoryContainer}>
           <TouchableOpacity
           onPress={ () =>{
             this.setState({ selected: `crown`})
           }}
           style={this.state.selected == "crown" ? styles.categoryBoxSelected : styles.categoryBox}
           >
           <Text>Crown</Text>
           
           </TouchableOpacity>

           <TouchableOpacity
            onPress={ () => {
              this.setState({ selected: `flower`})
            }}
            style={this.state.selected == "flower" ? styles.categoryBoxSelected: styles.categoryBox}
           >
           <Text>Flower</Text>
           </TouchableOpacity>

           <TouchableOpacity
            onPress={ () => {
              this.setState({ selected: `hair`})
            }}
            style={this.state.selected == "hair" ? styles.categoryBoxSelected: styles.categoryBox}
           >
           <Text>Hair</Text>
           </TouchableOpacity>

           <TouchableOpacity
            onPress={ () => {
              this.setState({ selected: `hat`})
            }}
            style={this.state.selected == "hat" ? styles.categoryBoxSelected: styles.categoryBox}
           >
           <Text>Hat</Text>
           </TouchableOpacity>

           <TouchableOpacity
            onPress={ () => {
              this.setState({ selected: `tiara`})
            }}
            style={this.state.selected == "tiara" ? styles.categoryBoxSelected: styles.categoryBox}
           >
           <Text>Tiara</Text>
           </TouchableOpacity>
          </View>
             <ScrollView
                style={{flexDirection: 'row'}}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {data[this.state.selected].map((filter_data) => {
                  return(
                    <TouchableOpacity
                       style={styles.filterImageContainer}
                       onPress={() =>
                           this.setState({ current_filter: `filter_${filter_data.id}` })
                        }>
                        <Image source={filter_data.image} style={{height: 32, width: 80}}/>
                    
                    </TouchableOpacity>
                  )
                })}
             </ScrollView>
        </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	droidSafeArea: {
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	headingContainer: {
		flex: 0.15,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'pink',
	},
	cameraStyle: {
		flex: 0.65,
	},
  titleText: {
		fontSize: 30,
	},
	framesContainer: {
		flex: 0.2,
		paddingLeft: RFValue(20),
		paddingRight: RFValue(20),
		paddingTop: RFValue(30),
		backgroundColor: 'pink',
	},
	filterImageContainer: {
		height: RFPercentage(8),
		width: RFPercentage(15),
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e4e7f8',
		borderRadius: 30,
		marginRight: 20,
	},
  	categoryContainer: {
		flex: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: RFValue(10),
	},
	categoryBox: {
		flex: 0.2,
		borderRadius: 30,
		borderWidth: 1,
		backgroundColor: 'white',
		width: '100%',
		padding: RFValue(3),
		margin: 1,
		alignItems: 'center',
	},
	categoryBoxSelected: {
		flex: 0.2,
		borderRadius: 30,
		borderWidth: 1,
		backgroundColor: '#efb141',
		width: '100%',
		padding: RFValue(3),
		margin: 1,
		alignItems: 'center',
	},
});