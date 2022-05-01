import React from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@mui/material';

import {
    DialogTitleContainer,
    DialogContentContainer,
    DialogActionContainer,
} from './styles';

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
                    <Button
                        color="primary"
                        onClick={handleCloseDialog}
                        className="custom-button"
                    >
                        Fechar
                    </Button>
                </DialogActionContainer>
            </DialogActions>
        </Dialog>
    )
}

export default VideoDialog;
