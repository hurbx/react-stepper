import React from 'react';
import { Box, Card, Stack, Step, StepLabel, Stepper } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { green, red } from "@mui/material/colors";

const stepStyle ={
    boxShadow: '0 2px 10px 0 rgba(0,0,0,.12)',
    backgroundColor: '#fff',
    padding:2,
    "& .Mui-active": {
        "& .MuiStepIcon-root": {
            color: '#1976d1',
            fontsize: "10rem",
        }
    },
    "& .Mui-completed":{
        "& .MuiStepIcon-root":{
            color: '#4cae50',
        }
    }
}



const ModStepper = () => {
    const [activeSteps, setActiveSteps] = React.useState(0);
    const [greenBorder, setGreenBorder] = React.useState(false);
    const [redBorder, setRedBorder] = React.useState(false);



    const handleClickGreen = () => {
        setGreenBorder(true);
    };

    const handleClickRed = () => {
        setRedBorder(true);
    }

    const greenButtonStyle = {
        border: greenBorder ? '1px solid green' : 'none',
        backgroundColor:'white',
        color:'black'
    }

    const redButtonStyle = {
        border: redBorder ? '1px solid red' : 'none',
        backgroundColor:'white',
        color:'black'
    }

    // Manejando valores maximos
    const handleNext = () => {
        if(activeSteps < 7){
            setActiveSteps((prevActiveSteps) => prevActiveSteps + 1);
        }
    }

    // Manejando valores minimos
    const handlePrevious = () => {
        if(activeSteps > 0){
            setActiveSteps((prevActiveSteps) => prevActiveSteps - 1);
        }

    }

    // Crear Pasos
    const activities = [
         "Informacio",
         "Muros",
         "Sectores",
         "Perfiles",
         "Drenajes",
         "Planos y Mapas",
         "Lista Aplicabilidad",

    ]
    return (
        <Box >

            <Box mx={3} mt={2}>
                <Stepper
                    activeStep={activeSteps}
                    alternativeLabel
                    sx={stepStyle}
                >
                    {activities.map((step, index) =>(

                        <Step key={index}>
                            <StepLabel> { step } </StepLabel>
                        </Step>
                    ) )}
                </Stepper>
            </Box>

            <Box mt={3} align='center'>
                <Box mt={5}>
                    <Card>
                        <p>Aqui</p>
                        <p>Tienen</p>
                        <p>Que</p>
                        <p>Ir</p>
                        <p>Distintos </p>
                        <p>Formularios</p>
                        <p>Cambian </p>
                        <p>Por Pantalla</p>
                    </Card>
                </Box>

                <Stack
                    spacing={3}
                    direction={'row'}
                    maxWidth={600}
                    align={'center'}>

                    <Button variant="contained"
                            startIcon={<CheckCircleIcon sx={{color:green[500]}} />}
                            //style={{backgroundColor:'white', color:'black', borderRadius:'5px' }}
                            onClick={handleClickGreen}
                            style={greenButtonStyle}
                    >
                        Aprobar
                    </Button>

                    <Button variant="contained"
                            startIcon={<ErrorIcon sx={{color:red[500]}} />}
                            //style={{backgroundColor: 'white',color:'black', borderRadius:'5px'}}
                            onClick={handleClickRed}
                            style={redButtonStyle}
                    >
                        Rechazar
                    </Button>

                </Stack>
                <Stack
                    spacing={3}
                    direction={'column'}
                    maxWidth={600}>
                    <Card>
                        <h1>""</h1>
                        <h1>comentarios se mantienen en todos los pasos</h1>
                        <h1>""</h1>

                    </Card>
                </Stack>

                <Stack
                    spacing={3}
                    direction={'row'}
                    maxWidth={600}>
                    <Button  startIcon={<ArrowBackIcon />}
                             style={{backgroundColor:'white', borderRadius:'5px'}}
                             onClick={handlePrevious}
                             disabled={activeSteps===0}
                    >
                        {activeSteps===0 ? 'Inicio' : 'Anterior'}
                    </Button>
                    <Button  endIcon={<ArrowForwardIcon />}
                             style={{backgroundColor:'white', borderRadius:'5px'}}
                             onClick={handleNext}
                             disabled={activeSteps===7}
                    >
                        {activeSteps===7 ? 'Finalizado' : 'Siguiente'}
                    </Button>

                </Stack>
            </Box>
            <div>


            </div>
        </Box>
    )
};
export default ModStepper;