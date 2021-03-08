import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Button, ButtonGroup, Text } from '@ui-kitten/components';

// This is class is only for the poc, and will be merged with the restaurant area in the future

interface Props {
	ingrediants: string[];
}

export default function IngrediantCustomizationButtons(props: Props) {
	const { ingrediants } = props;

    return (
        <Fragment>
            <ButtonGroup>
                {ingrediants.map((i,index) =>
                    <Button key={index}>
                        {i}
                    </Button>
                )}
            </ButtonGroup>
        </Fragment>
    );
}
