import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormInformacion from './FormInformacion';
import FormMuros from "./FormMuros";
import FormSectores from "./FormSectores";
import FormPerfiles from "./FormPerfiles";
import FormDrenajes from "./FormDrenajes";
import FormLista from "./FormLista";
import FormPlanos from "./FormPlanos";
import {Stack} from "@mui/material";

const steps = [
    "Información",
    "Muros",
    "Sectores",
    "Perfiles",
    "Drenajes",
    "Planos y Mapas",
    "Lista Aplicabilidad",
]
const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const stepStyle ={
    boxShadow: '0 2px 10px 0 rgba(0,0,0,.12)',
    backgroundColor: '#fff',
    padding:2,
    " .Mui-active": {
        " .MuiStepIcon-root": {
            color: '#1976d1',
            fontsize: "10rem",
        }
    },
    " .Mui-completed":{
        " .MuiStepIcon-root":{
            color: '#4cae50',
        }
    }
}

const ModStepper2 = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };



    return (
        <Box sx={{ width: '100%' }}>
            <Stepper alternativeLabel nonLinear activeStep={activeStep} sx={stepStyle}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <div>
                {allStepsCompleted() ? (
                    <React.Fragment>
                        Aceptada
                        <Typography sx={{ mt: 2, mb: 1 }}>

                            Su configuracion ha sido completada exitosamente ¿desea enviar para su revision?
                        </Typography>
                        <Box spacing={2} sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button onClick={handleOpen} >Enviar A Autoridad</Button>
                            <Button onClick={handleReset}>Enviar a Correccion</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style2}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">

                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        ¿Esta seguro(a) que desea enviar la configuracion a revision de la autoridad?
                                        <Stack spacing={30} direction="row">

                                            <Button>Enviar</Button>
                                            <Button>Volver</Button>

                                        </Stack>

                                    </Typography>
                                </Box>
                            </Modal>

                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            {activeStep + 1 === 1 && (<FormInformacion />)}
                            {activeStep + 1 === 2 && (<FormMuros />)}
                            {activeStep + 1 === 3 && (<FormSectores />)}
                            {activeStep + 1 === 4 && (<FormPerfiles />)}
                            {activeStep + 1 === 5 && (<FormDrenajes />)}
                            {activeStep + 1 === 6 && (<FormPlanos />)}
                            {activeStep + 1 === 7 && (<FormLista />)}


                        </Typography>
                        <Box style={{display:'flex', flexDirection: 'row'}}>
                            <Button onClick={handleComplete}>
                                Aceptar
                            </Button>
                            <Button>
                                Rechazar
                            </Button>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                Next
                            </Button>

                        </Box>
                    </React.Fragment>
                )}
            </div>
        </Box>
    );


}
export default ModStepper2;