import React from 'react';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemContentProps } from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EventNoteIcon from '@mui/icons-material/EventNote';
import HandymanIcon from '@mui/icons-material/Handyman';
import { data } from '../data/data'
import type { Type, TypeNode, EKPOK, EKPOKGroup } from '../data/data'
import { text } from 'stream/consumers';
import { textAlign } from '@mui/system';
import StyledTreeItem from './StyledTreeItem'
declare module "@mui/lab/TreeItem" {
    interface TreeItemContentProps {
        ekpok: EKPOK;
    }
}

interface EkpokGroupProps {
    data: EKPOKGroup[],
    updateEkpok: (ekpok: string) => void
}

function EkpokGroup(props: EkpokGroupProps) {
        const TreeRender = (data: EKPOKGroup[]) => {
            return (data.map(
                (node) => {
                    return (
                        <StyledTreeItem nodeId={node.id} labelIcon={EventNoteIcon} labelText={node.name} key={node.id} 
                        >
                            {node.ekpoks.map((ekpok) => {
                                return (
                                    <StyledTreeItem key={ekpok.id} nodeId={ekpok.id} labelIcon={HandymanIcon} labelText={ekpok.name} ContentProps={{ ekpok: ekpok } as any} />
                                )
                            })}
                        </StyledTreeItem>
                    )
                }
            ))
        };
        return (
            <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{
                    textAlign: 'left',
                    overflow: 'scroll'
                }}
                onNodeSelect={(e: any, id: any)=>{
                    props.updateEkpok(id);
                }}
            >
                {TreeRender(props.data)}
            </TreeView>
        )
    }

export default EkpokGroup;