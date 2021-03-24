import React from 'react';
import { View } from '../components/Themed';
import { TopNavigationAccessoriesShowcase } from '../components/TopNavigation';
import MenuArea from '../components/menu/MenuArea';
import { Button, Icon, IconProps } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ActionIcon = (name: string) => (props: IconProps) => <Icon name={name} {...props}/>;
const EditIcon = ActionIcon('edit');
const PlusIcon = ActionIcon('plus');

interface Props {}

function ResturantMenu(props: Props) {

	const handleAdd = () => {

	};

	const handleEdit = () => {

	};

	return (
		<View style={styles.container}>
			<TopNavigationAccessoriesShowcase title={'Resturant Menu'} />
			<ScrollView style={styles.menusContainer}>
				<MenuArea title='Entrees' />
				<MenuArea title='Main Courses' />
				<MenuArea title='Desters' />
			</ScrollView>
			<View style={styles.actionsContainer}>
				<Button accessoryLeft={PlusIcon}>Add</Button>
				<Button accessoryLeft={EditIcon}>Edit</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex'
	},
	actionsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		padding: '5%'
	},
	menusContainer: {
		flex: 1
	}
});

export default ResturantMenu;
