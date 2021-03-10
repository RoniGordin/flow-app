import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, IndexPath, Select, SelectItem, Text, Toggle } from '@ui-kitten/components';

// This is class is only for the poc, and will be merged with the restaurant area in the future

interface Props {
	ingrediants: string[];
    styles: any;
}

export const IngrediantCustomizationButtons = (props: Props) => {    
        const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>([]);
        return (
        <Fragment>
            <Select
                multiSelect={true}
                style={props.styles}
                selectedIndex={selectedIndex}
                placeholder={"Choose ingrediants"}
                onSelect={index => setSelectedIndex(index)}>
                    {props.ingrediants.map((i,index) =>
                        <SelectItem key={index} title={i}></SelectItem>
                    )}

            </Select>
            
        </Fragment>
    );
            }

