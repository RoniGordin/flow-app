import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-native';
import {useQuery} from "@apollo/client";
import {User} from "../types";
import {getUserById, GetUserByIdData} from "../api/queries/client/getUserById";
import {View} from "../components/Themed";
import {Button, Text} from "@ui-kitten/components";
import {StyleSheet} from 'react-native';

interface LocationState {
  userId: string
}

export default function ClientMainScreen() {
  const history = useHistory();
  const location = useLocation<LocationState>();
  const [user, setUser] = useState<User>();
  const {loading, error, data} = useQuery<GetUserByIdData, { id: string }>(getUserById, {variables: {id: location.state?.userId || "1abdcc1b-8319-4568-a458-3d68b7fac1d2"}});

  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    }
  }, [data, loading]);

  const viewRestaurants = () => {
    history.push('restaurants');
  };

  return (
    <View style={styles.container}>
      <View>
        {
          user?.username &&
					<Text style={styles.title} category='h1'>
            {`Welcome ${user.username}!`}
					</Text>
        }
        <View>
          <Button style={styles.button}>
            View My Orders
          </Button>
          <Button style={styles.button} onPress={viewRestaurants}>
            View Restaurants
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:120
  },
  title: {
    marginVertical: 40,
  },
  actionsSection: {
  },
  button: {
    margin: 5
  }
});

