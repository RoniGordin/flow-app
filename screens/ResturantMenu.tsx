import React from 'react';
import { View } from '../components/Themed';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';
import MenuArea from '../components/menu/MenuArea';
import { Button, Icon, IconProps, Input } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useHistory } from 'react-router-native';

interface Props {
	isBuisnessMode: boolean;
}

function ResturantMenu(props: Props) {
	const { isBuisnessMode } = props;
	const [value, setValue] = React.useState('');
	const history = useHistory();

	return (
		<View style={styles.container}>
			<TopNavigationAccessoriesShowcase title={'Resturant Menu'} />
			<Input
				placeholder='🔍Search menu'
				value={value}
				style={styles.searchStyle}
				onChangeText={(nextValue) => setValue(nextValue)}
			/>
			<ScrollView style={styles.menusContainer}>
				<MenuArea title='Entrees' enableAdding={isBuisnessMode} />
				<MenuArea title='Main Courses' enableAdding={isBuisnessMode} />
				<MenuArea title='Desters' enableAdding={isBuisnessMode} />
			</ScrollView>
			{!isBuisnessMode && (
				<Button
					style={styles.button}
					onPress={() => history.push('order')}
				>
					Finish Order
				</Button>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: '5%',
	},
	menusContainer: {
		flex: 1,
	},
	button: {
		marginTop: 30,
		marginVertical: 2,
	},
	searchStyle: {
		padding: 10,
	},
});

export default ResturantMenu;

/* {
				isBuisnessMode &&
				<View style={styles.actionsContainer}>
					<Button accessoryLeft={PlusIcon} onPress={handleAdd}>Add</Button>
					<Button accessoryLeft={EditIcon} onPress={handleEdit}>Edit</Button>
				</View>
			} */
