import React, {useContext} from 'react';
import {formControlStyles, formLabelStyles, FormRadio} from "../Form.styles";
import {Box, CircularProgress, FormControl, FormControlLabel, FormLabel, RadioGroup} from "@mui/material";
import {useQuery} from "react-query";
import axios from "axios";
import {AppContext} from "../../../context/context";
import {setPosition} from "../../../context/actioinsCreators";

const fetchPositions = async () => {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    return response.data
}

const Radio = () => {
    const {dispatch} = useContext(AppContext)
    const onSuccess = data => {
        dispatch(setPosition(data.positions[0].id))
    }

    const {data, isLoading, isFetching} = useQuery('form', fetchPositions, {
        refetchOnWindowFocus: false,
        refetchInterval: 100000,
        onSuccess
    })
    return (
        <Box sx={formControlStyles}>
            {isLoading || isFetching
                ? <CircularProgress color={'secondary'}/>
                : (
                    <FormControl color={'secondary'}>
                        <FormLabel sx={formLabelStyles}>Select your position</FormLabel>
                        <RadioGroup defaultValue={data.positions[0].id} name={'radio-button-group'}
                                    onChange={e => dispatch(setPosition(e.target.value))}>
                            {data.positions.map(position => (
                                <FormControlLabel key={position.id} control={<FormRadio/>} value={position.id}
                                                  label={position.name}/>
                            ))}
                        </RadioGroup>
                    </FormControl>
                )
            }
        </Box>
    );
};

export default Radio;