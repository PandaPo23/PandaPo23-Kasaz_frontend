import React, { Component, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from '../assets/styles/home'
import Icon from 'react-native-vector-icons/FontAwesome5';
import SideMenu from 'react-native-side-menu';
import SlideMenu from './SlideMenu';

import { getSelector } from '../redux/reducer';
import { getList } from '../redux/action';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isFilter: false,
      roomSize: 0,
      filterText: '',
      userInfo: [],
      minPrice: '',
      maxPrice: '',
      minSqm: '',
      maxSqm: '',
      minBed: '',
      maxBed: ''
    };
  }

  toggleFilter = () => {
    this.setState({
      isFilter: !this.state.isFilter
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    await this.props.fetchGetList();
  }

  onSearch = async () => {
    if (this.state.minPrice != '' && this.state.maxPrice != '') {
      if (parseInt(this.state.minPrice) > parseInt(this.state.maxPrice)) {
        alert("Ingrese el valor correcto.");
        return;
      }
    }
    if (this.state.minSqm != '' && this.state.maxSqm != '') {
      if (parseInt(this.state.minSqm) > parseInt(this.state.maxSqm)) {
        alert("Ingrese el valor correcto.");
        return;
      }
    }
    
    var sendParam = {};
    if(this.state.filterText != null && this.state.filterText != '') sendParam.title = this.state.filterText;
    if(this.state.minPrice != null && this.state.minPrice != '') sendParam.minprice = parseFloat(this.state.minPrice);
    if(this.state.maxPrice != null && this.state.maxPrice != '') sendParam.maxprice = parseFloat(this.state.maxPrice);
    if(this.state.minSqm != null && this.state.minSqm != '') sendParam.minsqm = parseFloat(this.state.minSqm);
    if(this.state.maxSqm != null && this.state.maxSqm != '') sendParam.maxsqm = parseFloat(this.state.maxSqm);
    sendParam.minrooms = this.state.roomSize;
    await this.props.fetchGetList(sendParam);
  }

  onTitleSearch = async () => {
    var sendParam = {
      title: this.state.filterText
    }
    await this.props.fetchGetList(sendParam);
  }

  render() {
    const MY_COLOR = "rgb(28,193,104)";
    const menu = <SlideMenu />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <View style={styles.header} >
            <TouchableOpacity onPress={() => this.setState({ isOpen: !this.state.isOpen })}>
              <Icon name="bars" size={24} color={MY_COLOR} style={styles.hamburger} solid />
            </TouchableOpacity>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/images/logo.png')}
                style={styles.image}
                resizeMode={'stretch'}
              />
            </View>
          </View>
          <View style={styles.filterView} >
            <TextInput style={styles.searchText} placeholder="Search Input" onChangeText={text => this.setState({ filterText: text })}>
            </TextInput>
            <TouchableOpacity style={styles.searchView} onPress={this.onTitleSearch}>
              <Icon name="search" size={18} color="white" style={{ margin: 5 }} solid />
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 25 }} onPress={this.toggleFilter}>
              <Text style={{ color: 'white', fontSize: 15, marginTop: 14 }}>Filtros</Text>
              {this.state.isFilter ?
                <Icon name="angle-down" size={24} color={MY_COLOR} style={styles.hamburger} solid />
                : <Icon name="angle-right" size={24} color={MY_COLOR} style={styles.hamburger} solid />
              }
            </TouchableOpacity>
          </View>
          {(this.state.isFilter) && (
            <View style={styles.filterContainer}>
              <View style={styles.filterContainerRow}>
                <Text style={{ fontSize: 12 }}>PRECIO </Text>
                <TextInput style={styles.leftFilterText} keyboardType={'numeric'} defaultValue = {this.state.minPrice} onChangeText={text => this.setState({ minPrice: text })}></TextInput>
                <Text>-</Text>
                <TextInput style={styles.rightFilterText} keyboardType={'numeric'} defaultValue = {this.state.maxPrice} onChangeText={text => this.setState({ maxPrice: text })}></TextInput>
              </View>
              <View style={styles.filterContainerRow}>
                <Text style={{ fontSize: 12 }}>TAMANO</Text>
                <TextInput style={styles.leftFilterText} keyboardType={'numeric'} defaultValue = {this.state.minSqm} onChangeText={text => this.setState({ minSqm: text })}></TextInput>
                <Text>-</Text>
                <TextInput style={styles.rightFilterText} keyboardType={'numeric'} defaultValue = {this.state.maxSqm} onChangeText={text => this.setState({ maxSqm: text })}></TextInput>
              </View>
              <View style={styles.filterContainerRow}>
                <Text style={{ fontSize: 12 }}>HABITACIONES    </Text>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 0 })}>
                  <Text style={{ ...styles.leftRoomSizeButton, backgroundColor: this.state.roomSize == 0 ? 'rgb(21,194,104)' : 'white' }}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 1 })}>
                  <Text style={{ ...styles.midRoomSizeButton, backgroundColor: this.state.roomSize == 1 ? 'rgb(21,194,104)' : 'white' }}>1+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 2 })}>
                  <Text style={{ ...styles.midRoomSizeButton, backgroundColor: this.state.roomSize == 2 ? 'rgb(21,194,104)' : 'white' }}>2+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 3 })}>
                  <Text style={{ ...styles.midRoomSizeButton, backgroundColor: this.state.roomSize == 3 ? 'rgb(21,194,104)' : 'white' }}>3+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 4 })}>
                  <Text style={{ ...styles.midRoomSizeButton, backgroundColor: this.state.roomSize == 4 ? 'rgb(21,194,104)' : 'white' }}>4+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ roomSize: 5 })}>
                  <Text style={{ ...styles.rightRoomSizeButton, backgroundColor: this.state.roomSize == 5 ? 'rgb(21,194,104)' : 'white' }}>5+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.filterButtonContainer}>
                <TouchableOpacity style={styles.filterButtonView} onPress={this.onSearch}>
                  <Text style={styles.filterButtonText}>Ver inmuebles</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          <ScrollView>
            {(this.props.userInfo.length>0) && (this.props.userInfo.map((data, index) =>
              (true) && (
                <View key={index}>
                  <Image
                    source={{ uri: data.picture }}
                    style={styles.itemImage}
                    resizeMode={'stretch'}
                  />
                  <View style={styles.priceView}>
                    <Text style={styles.price}>€{parseFloat(data.price).toFixed(3)}</Text>
                    <Text style={styles.unitPrice}>€{(parseFloat(data.price) / parseFloat(data.sqm)).toFixed(3)}/m²</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>{data.title}</Text>
                  </View>
                  <View style={styles.detailView}>
                    <View style={styles.sqm}>
                      <Icon name="check-circle" size={14} style={{ marginTop: 2 }} color='rgb(71,71,71)' solid />
                      <Text style={styles.detailText}>{data.sqm}m²</Text>
                    </View>
                    <View style={styles.firstSplitView}></View>
                    <View style={styles.bed}>
                      <Icon name="bed" size={14} style={{ marginTop: 2 }} color='rgb(71,71,71)' solid />
                      <Text style={styles.detailText}>{data.numofbed} habs</Text>
                    </View>
                    <View style={styles.secondSplitView}></View>
                    <View style={styles.bath}>
                      <Icon name="bath" size={14} style={{ marginTop: 2 }} color='rgb(71,71,71)' solid />
                      <Text style={styles.detailText}>{data.numofbath} banos</Text>
                    </View>
                  </View>
                </View>)
            ))}
          </ScrollView>
        </View>
      </SideMenu>
    )
  };
}

const mapStateToProps = (state) => {
  return { ...getSelector(state) }
}

const mapDispatchToProps = (dispatch) => ({
  fetchGetList: (searchParam) => dispatch(getList(searchParam))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen); 
