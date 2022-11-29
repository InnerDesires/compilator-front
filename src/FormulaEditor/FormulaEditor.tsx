import React, { useEffect, useState, useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { Formula, Type, TypeNode } from '../data/data';
import { styled } from '@mui/material/styles';
import { Button, Divider, Typography } from '@mui/material';
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Delete } from '@mui/icons-material';
import BuildIcon from '@mui/icons-material/Build';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SaveIcon from '@mui/icons-material/Save';
import PersonIcon from '@mui/icons-material/Person';
import Chip from '@mui/material/Chip';
import { Stack } from '@mui/system';
import { languageDef, configuration, keywords } from './langSetup';
import DropdownTreeSelect, { TreeNode } from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css'
import './EditorStyles.css'
import data from './demo-data.json';

function FormulaEditor(props: any) {

    const [currentFormula, setFormula] = useState<Formula>(props.formula);
    function handleChange(code: string) {
        setFormula({ ...currentFormula, content: code })
    }
    const monacoRef = useRef(null)
    function handleEditorWillMount(monaco: Monaco) {

        console.log('registering')
        // here is the monaco instance
        // do something before editor is mounted
        monaco.languages.register({ id: 'customLang' });


        monaco.languages.setMonarchTokensProvider('customLang', {
            keywords,
            operators: [
                '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
                '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
                '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
                '%=', '<<=', '>>=', '>>>='
            ],
            typeKeywords: [
                'boolean', 'double', 'byte', 'int', 'short', 'char', 'void', 'long', 'float'
            ],
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            tokenizer: {
                root: [
                    // identifiers and keywords
                    [/[a-zA-ZA-Яа-яИЇїіІєЄ_$][a-zA-ZA-Яа-яИЇїіІєЄ$\w_&]*/, {
                        cases: {
                            '@typeKeywords': 'keyword',
                            '@keywords': 'keyword',
                            '@default': 'identifier'
                        }
                    }],
                    [/[A-Z][\w\$]*/, 'type.identifier'],  // to show class names nicely

                    // whitespace
                    { include: '@whitespace' },

                    // delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, {
                        cases: {
                            '@operators': 'operator',
                            '@default': ''
                        }
                    }],

                    // @ annotations.
                    // As an example, we emit a debugging log message on these tokens.
                    // Note: message are supressed during the first load -- change some lines to see them.
                    [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],

                    // delimiter: after number because of .\d floats
                    [/[;,.]/, 'delimiter'],

                    // strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
                    [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],

                    // characters
                    [/'[^\\']'/, 'string'],
                    [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                    [/'/, 'string.invalid']
                ],

                comment: [
                    [/[^\/*]+/, 'comment'],
                    [/\/\*/, 'comment', '@push'],    // nested comment
                    ["\\*/", 'comment', '@pop'],
                    [/[\/*]/, 'comment']
                ],

                string: [
                    [/[^\\"]+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],

                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                    [/\/\*/, 'comment', '@comment'],
                    [/--.*$/, 'comment'],
                ],
            },
        })
        monaco.languages.setLanguageConfiguration('customLang', configuration)
    }
    useEffect(() => {
        setFormula(props.formula);
    }, [props.formula])

    const onChange = (currentNode: TreeNode, selectedNodes: TreeNode[]) => {
        console.log('onChange::', currentNode, selectedNodes)
    }
    const getData = (index: number) => {
        let copy = JSON.parse(JSON.stringify(currentFormula.types[index].type.tree));
        let selectedId = currentFormula.types[index].type.selectedId;
        let updateNode = (node: any) => {
            node.label = node.name
            node.value = node.id
            node.expanded = true
            if (node.value == selectedId) {
                node.isDefaultValue = true;
            }
        }
        let updateNodes = (nodes: any) => {
            updateNode(nodes);
            if (!nodes.children) {
                return;
            }
            for (let i = 0; i < nodes.children.length; i++) {
                updateNodes(nodes.children[i]);
            }
        }
        updateNodes(copy);
        return copy;
    }
    return (
        <Stack sx={{ marginTop: '0.5rem', height: '100%', padding: '0 10px 0 10px' }} spacing={1} >

            <Grid container width={'100%!important'} justifyContent="left" spacing={2}>
                <Grid item>
                    <Button color='success' size='small' variant="outlined" startIcon={<SpellcheckIcon />}>
                        Перевірити
                    </Button>
                </Grid>
                <Grid item>
                    <Button color='secondary' size='small' variant="outlined" startIcon={<SaveIcon />}>
                        Зберегти
                    </Button>
                </Grid>
                <Grid item>
                    <Button size='small' variant="outlined" startIcon={<BuildIcon />}>
                        Скомпілювати
                    </Button>
                </Grid>

                <Grid item>
                    <Button color='warning' size='small' variant="outlined" startIcon={<Delete />}>
                        Видалити
                    </Button>
                </Grid>
            </Grid>

            
            <Grid container width={'100%!important'} sx={{ paddingTop: '8px' }} justifyContent="space-between">
                <Grid container direction={"column"} xs={6}>
                    <Typography variant='body1' textAlign={'left'} fontWeight='bold'>
                        {currentFormula.name}
                    </Typography>
                    <Typography variant='body2' textAlign={'left'}>
                        {`ID: ` + currentFormula.id}
                    </Typography>
                </Grid>
                <Grid container direction={"column"} xs={6}>
                    <Typography variant='body2' textAlign={'left'}>
                        {`Date B: ` + `${currentFormula.dateBorn}`}
                    </Typography>
                    <Typography variant='body2' textAlign={'left'}>
                        {`Date E: ` + `${currentFormula.dateErased ? currentFormula.dateErased : 'активний'}`}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container width={'100%!important'} justifyContent="left" spacing={2} direction='column' className='typesContainer'> 
                {currentFormula.types.map((type, index) => {
                    return (
                        <Grid container xs>
                            <Grid item xs={2}>
                                <p className="typeName"> {type.name}</p>
                            </Grid>
                            <Grid item xs>
                                <DropdownTreeSelect data={getData(index)} mode="radioSelect" onChange={onChange} />
                            </Grid>
                        </Grid>
                    )
                })}
            </Grid>

            <Grid container width={'100%!important'}>
                <Editor
                    beforeMount={handleEditorWillMount}
                    value={currentFormula.content}
                    options={{
                        automaticLayout: true,
                        minimap: { enabled: false },
                        wordWrap: "on",
                        wordWrapColumn: 30,

                    }}
                    language='customLang'
                    height='60vh'

                />
            </Grid>
        </Stack>
    );
}

export default FormulaEditor