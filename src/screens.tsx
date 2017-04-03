import HelloWorld from './components/HelloWorld/index';
import { IApp } from './interfaces/IApp';
import Drawer from './components/Global/Drawer';
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
/*
import Movies from './modules/movies/Movies';
import MoviesList from './modules/movies/MoviesList';
import Movie from './modules/movies/Movie';
import Search from './modules/movies/Search';
*/
export function registerScreens(store:Redux.Store<IApp>, Provider:any) {
	/*
	Navigation.registerComponent('ReactNativeTS.Movie', () => Movie, store, Provider);
	Navigation.registerComponent('ReactNativeTS.Movies', () => Movies, store, Provider);
	Navigation.registerComponent('ReactNativeTS.MoviesList', () => MoviesList, store, Provider);
	Navigation.registerComponent('ReactNativeTS.Search', () => Search, store, Provider);*/
	
	Navigation.registerComponent('ReactNativeTS.HelloWorld', () => HelloWorld, store, Provider);
	Navigation.registerComponent('ReactNativeTS.Drawer', () => Drawer);
}