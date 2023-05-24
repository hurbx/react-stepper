import React, {useState} from 'react';
import {Card, CardContent, MenuItem, Select} from "@mui/material";
import {SelectChangeEvent} from "@mui/material";

const FormMuros = () =>{

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };



    return(
        <Card>
            <CardContent>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>

                </Select>


            </CardContent>
        </Card>

    );
};
export default FormMuros;