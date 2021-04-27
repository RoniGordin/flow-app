import React, { Fragment } from "react";
import { StyleSheet, Image, View } from "react-native";
import { TopNavigationAccessoriesShowcase } from "../components/TopNavigation";
import {
  Text,
  Card,
  Layout,
  Divider,
  List,
  ListItem,
  Icon,
  IconProps,
  Button,
  TopNavigationAction,
} from "@ui-kitten/components";
import {useHistory} from 'react-router-native';

interface Props {
  name: string;
}

export default function BuisnessDetailsScreen(props: Props) {
  const EditIcon = (props: IconProps) => <Icon {...props} name="edit" />;
  const history = useHistory();

  const data = new Array(8).fill({
    title: "Item",
    description: "Description for Item",
  });

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );

  const viewProducts = () => {
    history.push({pathname: 'menu', state: {isBuisnessMode: true}});
  };

  return (
    <Fragment>
      <Layout style={styles.topContainer} level="1">
        <TopNavigationAccessoriesShowcase title="Buisness Name" />
        <TopNavigationAction icon={EditIcon} />
        <Text>Description</Text>
        <Card>
          <View style={styles.cardText}>
            <Text style={styles.text}>
              The Maldives, officially the Republic of Maldives, is a small
              country in South Asia, located in the Arabian Sea of the Indian
              Ocean. It lies southwest of Sri Lanka and India, about 1,000
              kilometres (620 mi) from the Asian continent
            </Text>
            <View style={styles.itemImage}>
              <Image
                style={styles.itemImage2}
                source={require("../assets/images/placeholder.png")}
              />
            </View>
          </View>
        </Card>
        <Text>Details</Text>
        <List
          style={styles.flatlist}
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
        <Button style={styles.button} onPress={viewProducts}>View Products</Button>
      </Layout>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  flatlist: { maxHeight: "30%" },
  itemImage: {
    flex: 5,
    padding: "4%",
  },
  itemImage2: {
    width: 150,
    height: 150,
  },
  topContainer: {
    //flexDirection: "row",
    //display: "flex",
    justifyContent: "space-between",
  },
  button: {
    marginVertical: 2,
    width: 200,
    marginTop: 40,
    marginLeft: 100,
  },
  cardText: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    margin: 2,
  },
  text: {
    flex: 7,
    margin: 2,
  },
});
