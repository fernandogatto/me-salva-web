import React from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    IconButton,
    Tooltip,
} from '@mui/material';

import {
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
} from './styles';
import { Close } from '@mui/icons-material';

interface IVideoDialogProps {
    dialogOpen: boolean;
    handleCloseDialog: () => void;
    title: string;
    videoEmbed: string;
}

const VideoDialog = ({
    dialogOpen,
    handleCloseDialog,
    title,
    videoEmbed,
}: IVideoDialogProps): JSX.Element => {
    return (
        <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            keepMounted
            fullWidth
            fullScreen
            scroll="paper"
            style={{ margin: 60, borderRadius: 18 }}
        >
            <DialogTitle>
                <DialogTitleContainer>
                    {title}

                    <Tooltip title="Fechar" arrow>
                        <IconButton
                            aria-label="Fechar"
                            onClick={handleCloseDialog}
                        >
                            <Close />
                        </IconButton>
                    </Tooltip>
                </DialogTitleContainer>
            </DialogTitle>

            <DialogContent style={{ padding: 0 }}>
                <DialogContentContainer style={{ height: '100%' }}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={videoEmbed}
                        title="YouTube video player"
                    />
                </DialogContentContainer>
            </DialogContent>

            <DialogActions>
                <DialogActionContainer>
                </DialogActionContainer>
            </DialogActions>
        </Dialog>
    )
}

export default VideoDialog;
