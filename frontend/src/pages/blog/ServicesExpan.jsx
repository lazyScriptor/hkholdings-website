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
import { decode } from "he";
import DOMPurify from "dompurify";
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

  const sanitizedContent = DOMPurify.sanitize(shortDescription, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "span",
      "strong",
      "b",
      "i",
      "em",
      "u",
      "small",
      "sub",
      "sup",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "li",
      "a",
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "div",
      "hr",
      "blockquote",
      "code",
      "pre",
      "abbr",
      "cite",
      "dl",
      "dt",
      "dd",
      "details",
      "summary",
      "audio",
      "video",
    ],
    ALLOWED_ATTR: ["href", "rel", "target"],
  });

  return (
    <React.Fragment>
      <div className="w-full flex justify-center">

      <button
        onClick={handleClickOpen}
        className="px-4  md:self-auto py-2 w-44 rounded-lg bg-brandLightMaroon hover:bg-brandDarkMaroon transition-all duration-200 text-white  shadow-lg"
      >
        See more
      </button>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <img
          src={image}
          alt="no "
          className="flex self-center w-[70%] md:w-[60%] lg:w-[50%] rounded-b-lg"
        />
        <Box sx={{ pl: 2 }}>
          <Typography>Created At:</Typography>
          <Typography>Last Update on:</Typography>
        </Box>

        <DialogTitle>
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </DialogTitle>

        <DialogContent position={"relative"}>
          <DialogContentText>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
            {/* ;{shortDescription} */}
          </DialogContentText>
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
            <div className="hidden md:block lg:absolute top-0 right-4">
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
                  <MenuItem value={false}>full screen</MenuItem>
                  <MenuItem value="xs">x-tra small</MenuItem>
                  <MenuItem value="sm">small</MenuItem>
                  <MenuItem value="md">medium</MenuItem>
                  <MenuItem value="lg">large</MenuItem>
                  <MenuItem value="xl">xl</MenuItem>
                </Select>
                {/* <FormControlLabel
                sx={{ mt: 1 }}
                control={
                  <Switch
                    checked={fullWidth}
                    onChange={handleFullWidthChange}
                  />
                }
                label="Full width"
              /> */}
              </FormControl>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
