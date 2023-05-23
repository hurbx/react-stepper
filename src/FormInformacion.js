import React from 'react';
import {Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, TextField} from "@mui/material";
import {SelectChangeEvent} from "@mui/material";

const FormInformacion = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Card>
            <CardContent>
                    <Box spacing={3}>
                        <Stack direction={'row'}>
                            Sistema de Coordenadas :
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

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
                            </FormControl>
                        </Stack>

                        <Stack direction={'row'}>
                            Huso :
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

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
                            </FormControl>
                        </Stack>

                        <Stack direction={'row'}>
                            Huso Horario :
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

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
                            </FormControl>
                        </Stack>

                        <Stack direction={'row'}>
                            Formato de Fechas :
                            <TextField disabled={true} id="standard-basic" label="DD/MM/AAAA" variant="standard" />



                        </Stack>

                        <Stack direction={'row'}>
                            Formato de Horas :
                            <TextField disabled={true} id="standard-basic" label="HH:MM:SS" variant="standard" />


                        </Stack>

                        <Stack direction={'row'}>
                            Formato Decimal :
                            <TextField disabled={true} id="standard-basic" label="Comas (,)" variant="standard" />


                        </Stack>

                        <Stack direction={'row'}>
                            Formato de Miles :
                            <TextField disabled={true} id="standard-basic" label="Puntos (.)" variant="standard" />
                        </Stack>

                    </Box>


            </CardContent>
        </Card>
    );
};
export default FormInformacion;