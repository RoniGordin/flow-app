import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, IndexPath, Select, SelectItem, Text, Toggle } from '@ui-kitten/components';

// This is class is only for the poc, and will be merged with the restaurant area in the future

interface Props {
	ingrediants: string[];
    
}

interface State {
    ingrediantsSelected: boolean[];
}

export const IngrediantCustomizationButtons = (props: Props) => {    
        const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>([new IndexPath(0)]);
        return (
        <Fragment>
            <Select
                multiSelect={true}
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}>
                    {props.ingrediants.map((i,index) =>
                        <SelectItem key={index} title={i}></SelectItem>
                    )}

            </Select>
            
        </Fragment>
    );
            }

