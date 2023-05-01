import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Input = styled(MuiInput)`
        width: 60px;
    `;

function Settings() {
    const [languageModel, setLanguageModel] = useState('');
    const [advancedSettings, setAdvancedSettings] = useState(false); // Defining advanced settings


    const handleLanguageModelChange = (event) => {
        setLanguageModel(event.target.value);
    };

    const langModelSelect = [
        'text-davinci-003',
        'text-curie-001',
        'text-babbage-002',
        'text-davinci-002'
    ]; // Just samples of text

    // Input parameters for the advanced settings

    // Temperature
    const [temperature, setTemperature] = useState(0.7);

    const handleTemperatureSliderChange = (event, newValue) => {
        setTemperature(newValue);
    };

    const handleTemperatureInputChange = (event) => {
        setTemperature(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleTemperatureBlur = () => {
        if (temperature < 0) {
            setTemperature(0);
        } else if (temperature > 1) {
            setTemperature(1);
        }
    };

    // Maximum length
    const [maxLength, setMaxLength] = useState(256);

    const handleMaxLengthSliderChange = (event, newValue) => {
        setMaxLength(newValue);
    };

    const handleMaxLengthInputChange = (event) => {
        setMaxLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleMaxLengthBlur = () => {
        if (maxLength < 1) {
            setMaxLength(1);
        } else if (maxLength > 4000) {
            setMaxLength(4000);
        }
    };

    // Top P
    const [topP, setTopPLength] = useState(1);

    const handleTopPSliderChange = (event, newValue) => {
        setTopPLength(newValue);
    };

    const handleTopPInputChange = (event) => {
        setTopPLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleTopPBlur = () => {
        if (topP < 0) {
            setTopPLength(0);
        } else if (topP > 1) {
            setTopPLength(1);
        }
    };

    // Frequency Penalty
    const [frequencyPenalty, setFrequencyPenaltyLength] = useState(0);

    const handleFrequencyPenaltySliderChange = (event, newValue) => {
        setFrequencyPenaltyLength(newValue);
    };

    const handleFrequencyPenaltyInputChange = (event) => {
        setFrequencyPenaltyLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleFrequencyPenaltyBlur = () => {
        if (frequencyPenalty < 0) {
            setFrequencyPenaltyLength(0);
        } else if (frequencyPenalty > 2) {
            setFrequencyPenaltyLength(2);
        }
    };

    // Presence penalty
    const [presencePenalty, setPresencePenaltyLength] = useState(0);

    const handlePresencePenaltySliderChange = (event, newValue) => {
        setPresencePenaltyLength(newValue);
    };

    const handlePresencePenaltyInputChange = (event) => {
        setPresencePenaltyLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handlePresencePenaltyBlur = () => {
        if (presencePenalty < 0) {
            setPresencePenaltyLength(0);
        } else if (presencePenalty > 2) {
            setPresencePenaltyLength(2);
        }
    };

    // Best of
    const [bestOf, setBestOfLength] = useState(1);

    const handleBestOfSliderChange = (event, newValue) => {
        setBestOfLength(newValue);
    };

    const handleBestOfInputChange = (event) => {
        setBestOfLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBestOfBlur = () => {
        if (bestOf < 1) {
            setBestOfLength(1);
        } else if (bestOf > 20) {
            setBestOfLength(20);
        }
    };

    // Resetting inputs when toggled off
    const resetInputs = () => {
        setTemperature(0.7);
        setMaxLength(256);
        setTopPLength(1);
        setFrequencyPenaltyLength(0);
        setPresencePenaltyLength(0);
        setBestOfLength(1);
    };

    return (
        <>
            <TextField
                required
                id="outlined-required"
                label="API Key"
                sx={{ width: '100%' }}
            />
            <Button variant="contained" disableElevation sx={{ width: '100%', mt: 2  }}>
                Submit API Key
            </Button>
            <FormControl fullWidth sx={{ height: '100%', mt: 2 }}>
                <InputLabel
                    id="language-model"
                >
                    Language Model
                </InputLabel>
                <Select
                    labelId="language-model-select"
                    id="language-model-select"
                    value={languageModel}
                    label="Language Model"
                    onChange={handleLanguageModelChange}
                    sx={{ height: '100%' }}
                >
                    {langModelSelect.map((langModel) => (
                        <MenuItem
                            key={langModel}
                            value={langModel}
                        >
                            {langModel}
                        </MenuItem>
                    ))}
                </Select>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch />}
                        label="Advanced Settings"
                        sx={{ mt: 2 }}
                        onChange={(event) => {
                            setAdvancedSettings(event.target.checked);
                            if (!event.target.checked) {
                                resetInputs();
                            }
                        }}
                    />
                </FormGroup>
                {advancedSettings && (
                    <>
                        {/* Temperature */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Temperature
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof temperature === 'number' ? temperature : 0}
                                    onChange={handleTemperatureSliderChange}
                                    aria-labelledby="input-slider"
                                    step={0.01}
                                    min={0}
                                    max={1}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={temperature}
                                    size="small"
                                    onChange={handleTemperatureInputChange}
                                    onBlur={handleTemperatureBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 0.01,
                                        min: 0,
                                        max: 1,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Maximum Length */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Maximum Length
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof maxLength === 'number' ? maxLength : 0}
                                    onChange={handleMaxLengthSliderChange}
                                    aria-labelledby="input-slider"
                                    step={1}
                                    min={1}
                                    max={4000}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={maxLength}
                                    size="small"
                                    onChange={handleMaxLengthInputChange}
                                    onBlur={handleMaxLengthBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 4000,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Top P */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Top P
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof topP === 'number' ? topP : 0}
                                    onChange={handleTopPSliderChange}
                                    aria-labelledby="input-slider"
                                    step={0.01}
                                    min={0}
                                    max={1}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={topP}
                                    size="small"
                                    onChange={handleTopPInputChange}
                                    onBlur={handleTopPBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 0.01,
                                        min: 0,
                                        max: 1,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Frequency Penalty */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Frequency Penalty
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof frequencyPenalty === 'number' ? frequencyPenalty : 0}
                                    onChange={handleFrequencyPenaltySliderChange}
                                    aria-labelledby="input-slider"
                                    step={0.01}
                                    min={0}
                                    max={2}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={frequencyPenalty}
                                    size="small"
                                    onChange={handleFrequencyPenaltyInputChange}
                                    onBlur={handleFrequencyPenaltyBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 0.01,
                                        min: 0,
                                        max: 2,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Presence Penalty */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Presence Penalty
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof presencePenalty === 'number' ? presencePenalty : 0}
                                    onChange={handlePresencePenaltySliderChange}
                                    aria-labelledby="input-slider"
                                    step={0.01}
                                    min={0}
                                    max={2}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={presencePenalty}
                                    size="small"
                                    onChange={handlePresencePenaltyInputChange}
                                    onBlur={handlePresencePenaltyBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 0.01,
                                        min: 0,
                                        max: 2,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Best Of */}
                        <Typography id="input-slider" gutterBottom sx={{ mt: 2 }}>
                            Best Of
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Slider
                                    value={typeof bestOf === 'number' ? bestOf : 0}
                                    onChange={handleBestOfSliderChange}
                                    aria-labelledby="input-slider"
                                    step={1}
                                    min={1}
                                    max={20}
                                    sx={{ ml: 1 }}
                                />
                            </Grid>
                            <Grid item>
                                <Input
                                    value={bestOf}
                                    size="small"
                                    onChange={handleBestOfInputChange}
                                    onBlur={handleBestOfBlur}
                                    sx={{ ml: 1 }}
                                    inputProps={{
                                        step: 1,
                                        min: 1,
                                        max: 20,
                                        type: 'number',
                                        'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </>
                )}
            </FormControl>
        </>
    );
}

export default Settings;