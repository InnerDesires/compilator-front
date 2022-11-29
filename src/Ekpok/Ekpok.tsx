import { EKPOK } from "../data/data";
import { Container, Divider, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Icon from '@mui/material/Icon';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
}));


function Ekpok(props: { data: EKPOK, updateActiveFormula: Function }) {
    const [active, setActive] = useState(NaN);
    return (
        <Container maxWidth='sm' sx={{ padding: '0 0 5px 5px !important' }}>
            <Box sx={{ padding: '0.5rem 0 0 0' }} >
                <Grid container width={'100%'} spacing={1}>
                    <Grid item xs={12}>
                        <Item>
                            <Typography textAlign={'left'}>
                                <>
                                    <Typography variant='body1' textAlign={'left'} fontWeight='bold'>
                                        {props.data.name}
                                    </Typography>
                                    <Divider sx={{ margin: '4px 0 7px 0' }} orientation="horizontal" flexItem />
                                    <Typography textAlign={'left'} variant='body2' >
                                        {`Мнемоніка: ` + props.data.mnemonic}
                                    </Typography>
                                </>
                            </Typography>
                            <Typography textAlign={'left'} variant='body2' >
                                {`ID: ` + props.data.id}
                            </Typography>
                            <Typography textAlign={'left'} variant='body2' >
                                {`Автор: ` + props.data.user}
                            </Typography>
                            <Typography textAlign={'left'} variant='body2' >
                                {`Схема: ` + props.data.schema}
                            </Typography>
                            <Divider orientation="horizontal" flexItem >date_b  date_e</Divider>
                            <Grid direction={'row'} sx={{ width: '100%!important' }}>
                                <Chip sx={{ backgroundColor: 'rgba(25, 118, 210, 0.08);', marginTop: '5px', marginRight: '10px', padding: '8px' }} icon={<DateRangeIcon />} label={`${props.data.dateBorn}`} />
                                <Chip sx={{ backgroundColor: 'rgba(25, 118, 210, 0.08);', marginTop: '5px', padding: '8px' }} icon={<DeleteForeverIcon />} label={`${props.data.dateErased ? props.data.dateErased : 'активний'}`} />
                            </Grid>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>

                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div className="blockTitle">Підлеглі формули</div>
                    <List dense component="nav" aria-label="secondary mailbox folder">
                        {props.data.formulas.map((formula, index) => {
                            return (

                                <ListItemButton
                                    selected={index === active}
                                    onClick={(event) => {
                                        setActive(index);
                                        props.updateActiveFormula(formula)
                                    }}
                                >
                                    <ListItemText primary={formula.name} secondary={formula.dateBorn + '-' + (formula.dateErased ? formula.dateErased : '')} />
                                </ListItemButton>
                            )
                        })}


                    </List>
                </Grid>
            </Box>
        </Container>

    )
}

export default Ekpok;