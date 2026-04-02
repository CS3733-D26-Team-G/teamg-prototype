import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
// import SendIcon from '@mui/icons-material/Send'
import Select, { type SelectChangeEvent } from '@mui/material/Select'
import { MenuItem } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import CalendarInput from './calendarInput';
import './ContentForm.css'



export default function ContentForm() {

    const [recipient, setRecipient] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setRecipient(event.target.value as string);
    };

    return (
        <section className="main-content-form">
            <div className="header">
                <h2>Submit a file</h2>
            </div>

            <div className="main">
                <form>
                    <TextField id="outlined-basic" label="Name of Document" variant="outlined"></TextField>
                    <TextField id="outlined-basic" label="URL of Link" variant="outlined"></TextField>
                    <TextField id="outlined-basic" label="Content Owner" variant="outlined"></TextField>
                    <div className='form-row'>
                        <FormControl fullWidth>
                            <InputLabel id="recipient-label">Intended Recipient</InputLabel>
                            <Select
                                labelId="recipient-label"
                                id="recipient"
                                label="Intended Recipient"
                                value={recipient}
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Underwriter</MenuItem>
                                <MenuItem value={20}>Business Analyst</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <CalendarInput label='Last Modified Date'></CalendarInput>
                    <CalendarInput label='Link Expiration Date'></CalendarInput>
                    <FormControl fullWidth>
                        <InputLabel id="content-type-label">Type of Content</InputLabel>
                        <Select
                            labelId="content-type-label"
                            id="content-type"
                            label="Type of Content"
                            value={recipient}
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Reference Content</MenuItem>
                            <MenuItem value={20}>Workflow Content</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="status-label">Document Status</InputLabel>
                        <Select
                            labelId="status-label"
                            id="status"
                            label="Document Status"
                            value={recipient}
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Available</MenuItem>
                            <MenuItem value={20}>In Use</MenuItem>
                            <MenuItem value={30}>Unavailable</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <div className='submit-container'> */}
                        <Button variant="contained" className="submit-button">
                            Submit
                        </Button>
                    {/* </div> */}
                </form>
            </div>
        </section>
    );
}