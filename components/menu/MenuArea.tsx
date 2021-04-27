import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { MenuScrollView } from './MenuScrollView';
import { Text } from '@ui-kitten/components';
import { View } from '../Themed';
import { Button, Icon, IconProps } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/devsupport';

const ActionIcon = (name: string) => (props: IconProps) => (
	<Icon name={name} {...props} />
);

const PlusIcon = ActionIcon('plus');

interface Props {
	title: string;
	enableAdding: boolean;
}

export default function MenuArea(props: Props) {
	const { title, enableAdding } = props;

	const handleAdd = () => {};

	return (
		<View style={styles.container}>
			<View style={styles.titleConatiner}>
				<Text style={styles.title}>{title}</Text>
				{
                    enableAdding &&
					<Button accessoryLeft={PlusIcon} onPress={handleAdd}>
						Add
					</Button>
				}
			</View>
			<MenuScrollView />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		marginLeft: 5,
		fontWeight: 'bold',
		paddingTop: 20,
	},
    titleConatiner: {
        display: 'flex',
        flexDirection: 'row',
        direction: 'ltr',
        justifyContent: 'space-between'
    },
    container: {
        marginVertical: 10
    }
});
