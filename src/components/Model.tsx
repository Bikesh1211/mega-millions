"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 5,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  width: { sm: "60%", xs: "90%", md: "auto", xl: "auto" },
};

export default function Model({ children, btnTxt, vairant }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          color: "white",
          textTransform: "capitalize",
          // backgroundColor: "",
        }}
        color="info"
      >
        {btnTxt}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack sx={{ position: "absolute", right: 10, top: 10 }}>
            <Button color="error" onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Stack>
          {children}
        </Box>
      </Modal>
    </>
  );
}
