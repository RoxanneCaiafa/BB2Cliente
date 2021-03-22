import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function Details({ open, setOpen }) {
    const state = useSelector(state => state.itemsReducer);



    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {state.detail.description}
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>

                        <li>Code: {state.detail.id}</li>
                        <li>State: {state.detail.state}</li>
                        <li>Price: {state.detail.price} </li>
                        <li>Creator: {state.detail.creator}</li>
                        <li>Creation date: {state.detail.creationDate}</li>
                    </Typography>
                    <Typography gutterBottom>
                        Suppliers
          <ul>
                            {
                                state.detail.providers.map(i => (
                                    <li> {i.name}    ({i.country}) : {i.idSupplier}
                                    </li>
                                )
                                )}

                        </ul>
                    </Typography>
                    <Typography gutterBottom>
                        Price reductions
          <ul>
                            {
                                state.detail.reducePrice.map(i => (
                                    <li> ({i.reducedPrice}%)  start: {i.start}  end: {i.end}
                                    </li>
                                )
                                )}

                        </ul>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Ok
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}