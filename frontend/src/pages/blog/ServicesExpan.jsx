import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";

export default function ServicesExpan({
  index,
  image,
  title,
  shortDescription,
}) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        See more
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <img
          src={image}
          alt="no "
          className="flex self-center w-[70%] rounded-b-lg"
        />
        <Box sx={{pl:2}}>
        <Typography>Created At:</Typography>
        <Typography>Last Update on:</Typography>

        </Box>
        <DialogTitle >{title}</DialogTitle>
        <DialogContent position={"relative"}>
          <DialogContentText>{shortDescription}</DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              border: "1px sloid red",
              display: "flex",
              m: "auto",
              width: "fit-content",
             
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">Adjust blog width</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: "max-width",
                  id: "max-width",
                }}
              >
                <MenuItem value={false}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
              <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <Switch
                    checked={fullWidth}
                    onChange={handleFullWidthChange}
                  />
                }
                label="Full width"
              />
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
