import React from 'react';
import { StyleSheet,Text,SafeAreaView,ScrollView} from 'react-native';
import { DataTable,Card } from 'react-native-paper';

const TableExample = () => {
   
return (
		<ScrollView>
	<DataTable style={styles.container}>
		<Text style={styles.dataHistory}>Data History</Text>
		<Card>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title style={{color:'red'}}>Position</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Battery Life</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Time</DataTable.Title>
	</DataTable.Header>
	
	
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell >Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row >
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title style={{color:'red'}}>Position</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Battery Life</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Time</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell>Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title style={{color:'red'}}>Position</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Battery Life</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Time</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell>Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title style={{color:'red'}}>Position</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Battery Life</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Time</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell>Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title style={{color:'red'}}>Position</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Battery Life</DataTable.Title>
		<DataTable.Title style={styles.headerText}>Time</DataTable.Title>
	</DataTable.Header>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Krishna</DataTable.Cell>
		<DataTable.Cell>Uttapam</DataTable.Cell>
		<DataTable.Cell>26</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row>
		<DataTable.Cell>Vanshika</DataTable.Cell>
		<DataTable.Cell>Brownie</DataTable.Cell>
		<DataTable.Cell>20</DataTable.Cell>
	</DataTable.Row>
	<DataTable.Row style={styles.tableHeader2}>
		<DataTable.Cell>Teena</DataTable.Cell>
		<DataTable.Cell>Pizza</DataTable.Cell>
		<DataTable.Cell>24</DataTable.Cell>
	</DataTable.Row>
	</Card>
	</DataTable>
	</ScrollView>
	
);
};

export default TableExample;

const styles = StyleSheet.create({
dataHistory:{
	 margin:60,
      textAlign:'center',
	  fontSize:20,
	  fontWeight:'bold',
	  color:'white',
	  borderRadius:25,
	  height:40,
	  backgroundColor:'rgb(0, 150, 255)',
	},
container: {
	padding: 15,
	backgroundColor:'#FF5733',
	flex:1,
},
tableHeader: {
	backgroundColor:'rgb(0, 150, 255)',
	//backgroundColor: '#DCDCDC',
},
tableHeader2: {
	backgroundColor:'#f7f7f7',
	//backgroundColor: '#DCDCDC',
},

});
