import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'center', 
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: Dimensions.get('window').width, 
    height: 50, 
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  hamburger: {
    margin:12
  },
  imageView: {
    width:Dimensions.get('window').width - 90, 
    alignItems:'center'
  },
  image: {
    height: 50, 
    width: 105,
  },
  filterView:{
    width: Dimensions.get('window').width, 
    height: 50, 
    backgroundColor: 'rgb(114, 42, 160)',
    flexDirection: 'row'
  },
  searchText:{
    backgroundColor:'white', 
    height: 30, 
    marginTop:10, 
    marginLeft:10,
    padding: 0, 
    paddingLeft:5, 
    borderTopLeftRadius:4, 
    borderBottomLeftRadius:4, 
    borderColor:'white', 
    borderWidth:1, 
    width:Dimensions.get('window').width - 150
  },
  searchView:{
    width:30,
    backgroundColor:'rgb(28,193,104)', 
    borderTopRightRadius:4, 
    borderBottomRightRadius:4, 
    marginTop:10, 
    height:30
  },
  itemImage:{
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').width-100
  },
  priceView:{
    width:Dimensions.get('window').width, 
    height:80, 
    backgroundColor:'rgba(255,255,255,0.6)',
    marginTop:-80
  },
  price:{
    fontSize:16, 
    fontWeight:'bold', 
    marginLeft:16, 
    marginTop:16
  },
  unitPrice:{
    fontSize:14, 
    marginLeft:16, 
    marginTop:4
  },
  title:{
    fontSize:15, 
    fontWeight:'bold', 
    borderColor:'rgb(227,227,227)',
    borderWidth:1, 
    padding:8, 
    color:'rgb(51,76,151)'
  },
  detailView:{ 
    flexDirection:'row', 
    height:50,
    borderColor:'rgb(227,227,227)',
    borderWidth:1,
    borderTopWidth:0
  },
  sqm:{ 
    flexDirection:'row', 
    marginLeft: 32, 
    marginTop: 14 
  },
  bed:{ 
    flexDirection:'row', 
    position:'absolute', 
    left: 32 + Dimensions.get('window').width/3, 
    marginTop: 14 
  },
  bath:{ 
    flexDirection:'row', 
    position:'absolute', 
    left: 32 + Dimensions.get('window').width/3*2, 
    marginTop: 14 
  },
  firstSplitView:{ 
    marginTop:10, 
    height:30, 
    width:2, 
    backgroundColor:'rgb(227,227,227)', 
    position:'absolute', 
    left:Dimensions.get('window').width/3 
  },
  secondSplitView:{ 
    marginTop:10, 
    height:30, 
    width:2, 
    backgroundColor:'rgb(227,227,227)', 
    position:'absolute', 
    left:Dimensions.get('window').width/3*2 
  },
  detailText:{
    color:'rgb(71,71,71)', 
    fontSize:14, 
    marginLeft:4
  },
  spaceView:{
    height:10,
    backgroundColor:'rgb(223,223,223)'
  },
  filterContainer:{
    height:205
  },
  filterContainerRow:{
    height:50, 
    alignItems:'center', 
    justifyContent:'center', 
    flexDirection:'row'
  },
  leftFilterText:{
    width:100, 
    borderWidth:1, 
    borderRadius:4, 
    marginLeft:20, 
    marginRight:10, 
    padding:0, 
    paddingLeft:5
  },
  rightFilterText:{
    width:100, 
    borderWidth:1, 
    borderRadius:4, 
    marginLeft:10, 
    padding:0, 
    paddingLeft:5
  },
  leftRoomSizeButton:{
    padding:8, 
    borderColor:'rgb(227,227,227)', 
    borderWidth:1, 
    borderTopLeftRadius:4, 
    borderBottomLeftRadius:4
  },
  midRoomSizeButton:{
    padding:8, 
    borderColor:'rgb(227,227,227)', 
    borderWidth:1,
    borderLeftWidth:0
  },
  rightRoomSizeButton:{
    padding:8, 
    borderColor:'rgb(227,227,227)', 
    borderWidth:1, 
    borderTopRightRadius:4, 
    borderBottomRightRadius:4,
    borderLeftWidth:0
  },
  filterButtonContainer:{
    height:50, 
    alignItems:'center', 
    justifyContent:'center', 
    flexDirection:'row'
  },
  filterButtonView:{
    width:250, 
    height:35, 
    borderRadius:8, 
    backgroundColor:'rgb(115,37,161)', 
    alignItems:'center'
  },
  filterButtonText:{
    color:'white', 
    fontSize:14, 
    marginTop:7
  }
});

export default styles;
