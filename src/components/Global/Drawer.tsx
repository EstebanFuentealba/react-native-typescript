import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
    StyleSheet
} from 'react-native';


class Drawer extends Component<any, any> {

	_openSearch() {
		this._toggleDrawer();
        /*
		this.props.navigator.showModal({
			screen: 'movieapp.Search',
			title: 'Search'
		});*/
	}

	_goToMovies() {
		this._toggleDrawer();
        /*
		this.props.navigator.popToRoot({
			screen: 'movieapp.Movies'
		});*/
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
	return (
			<View style={styles.container}>
                <View style={styles.drawerList}>
                    <TouchableOpacity onPress={this._openSearch.bind(this)}>
                        <View style={styles.drawerListItem}>
                            <Text style={styles.drawerListItemText}>
                                Search
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToMovies.bind(this)}>
                        <View style={styles.drawerListItem}>
                            <Text style={styles.drawerListItemText}>
                                Movies
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.drawerListItem}>
                        <Text style={styles.drawerListItemText} onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
                            TV Shows
                        </Text>
                    </View>
                </View>
                <Text style={styles._version}>
                    {/* 'v1.0.0' */}
                </Text>
            </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 25,
		justifyContent: 'center'
	} as React.ViewStyle,
	drawerList: {

	} as React.ViewStyle,
	drawerListIcon: {
		width: 27
	} as React.ImageStyle,
	drawerListItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 23
	} as React.ViewStyle,
	drawerListItemText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 23,
		paddingLeft: 15,
		flex: 1
	} as React.ViewStyle,
	_version: {
		color: '#3c3c3c',
		position: 'absolute',
		bottom: 25,
		marginLeft: 53
	} as React.ViewStyle
});


export default Drawer;