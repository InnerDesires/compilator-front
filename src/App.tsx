import React, { useState } from 'react';
import './App.css';
import EkpokGroup from './EkpokGroup/EkpokGroup';
import Ekpok from './Ekpok/Ekpok';
import { data, EKPOK, Formula } from './data/data';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormulaEditor from './FormulaEditor/FormulaEditor';
import { styled } from '@mui/material/styles';
import { Typography, Divider} from '@mui/material';
import { Paper } from '@mui/material';
import PropTypes from 'prop-types';

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
  }
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
}));
interface appState {
  showEkpokGroups: boolean;
  showEkpok: boolean
}
function App() {
  const [ekpok, setEkpok] = useState<EKPOK>();
  const [currentFormula, setFormula] = useState<Formula>();
  const [state, setState] = useState<appState>({
    showEkpok: true,
    showEkpokGroups: true
  });
  function changeEkpok(ekpok: string) {
    for (let i = 0; i < data.length; i++) {
      let index = data[i].ekpoks.findIndex(val => val.id === ekpok);
      if (index !== -1) {
        setEkpok(data[i].ekpoks[index]);
        setFormula(undefined);
        break;
      }
    }
  }

  function updateActiveFormula(formula: Formula) {
    setFormula(formula);
  }
  return (
    <div className="App" style={{ minHeight: '100vh', boxSizing: 'border-box' }}>
        <Item elevation={4} sx={{ minHeight: 'calc(100vh - 20px)', boxSizing: 'border-box' }}>
          <Grid container minHeight={'calc(100vh - 20px)'}>
            <Grid item xs={3} style={{display: state.showEkpokGroups? 'block': 'none'}}>
              <div className="blockTitle" style={{margin: '8px 0 4px 0'}}>Звіти та Показники</div>
              <EkpokGroup data={data} updateEkpok={changeEkpok} />
            </Grid>
            <Grid item container xs>
              <Grid item xs>
                <Item sx={{ minHeight: 'calc(100vh - 20px)', boxSizing: 'border-box' }} elevation={3}>
                  <Grid container xs sx={{ minHeight: 'calc(100vh - 30px)'}}>
                    <Grid item xs={4}>
                      <div className="blockTitle">Обраний Показник </div>
                      {ekpok && <Ekpok data={ekpok} updateActiveFormula={updateActiveFormula} />}
                    </Grid> 
                    <Grid item xs={8}>
                    
                      {currentFormula && <FormulaEditor formula={currentFormula}></FormulaEditor>}
                    </Grid>
                  </Grid>
                </Item>
                <button onClick={()=>{setState({...state, showEkpokGroups: !state.showEkpokGroups})}}id="hideEkpoks"> {state.showEkpokGroups ? '<': '>'} </button>
              </Grid>
            </Grid>
          </Grid>
        </Item>
    </div>
  );
}

export default App;
