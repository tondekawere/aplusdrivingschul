import React, { useState } from "react";
import {
  TextField,
  Typography,
  Paper,
  Button,
  Select,
  Box,
  Divider,
  Stack,
  Grid,
  Card,
} from "@mui/material";
import { ApprovalSharp, TaskAlt } from "@mui/icons-material";
import Image from "next/image";

export default function CallToAction() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cell, setCell] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_EMAIL_USERNAME);
    console.log(process.env.NEXT_PUBLIC_EMAIL_PASSWORD);

    if (name == "" && email == "") {
      setLoading(false);
      alert("Please enter both name & email id");
      return false;
    }

    await fetch("/api/", {
      method: "POST",
      body: JSON.stringify({ name, email, cell, message }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert(
            `Thank you for your interest ${name}! We will get back to you soon!`
          );
          setName("");
          setEmail("");
          setCell("");
          setMessage("");
        } else {
          alert("Apologies! Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };
  return (
    <div>
      <Box sx={{ width: "100%", mb: 2 }}>
        <Divider>
          <Typography variant="h4">Contact</Typography>
        </Divider>
      </Box>
      <Grid
        container
        display={"flex"}
        spacing={2}
        sx={{ gap: { lg: "5%" }, padding: { lg: "1% 5% 4% 5% " } }}
      >
        <Grid
          item
          sm={12}
          md={8}
          lg={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          border={0}
        >
          <Stack gap={5} sx={{ p: 0 }}>
            <Box display={"flex"}>
              <TaskAlt sx={{ mr: 2 }} />
              <Typography variant="h6">
                Are you currently facing challenges with your voice solutions?
              </Typography>
            </Box>
            <Box display={"flex"}>
              <TaskAlt sx={{ mr: 2 }} />
              <Typography variant="h6">
                Is your service provider leaving you unattended for days?
              </Typography>
            </Box>
            <Box display={"flex"}>
              <TaskAlt sx={{ mr: 2 }} />
              <Typography variant="h6">
                Are you always have issues with your company emails?
              </Typography>
            </Box>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          lg={5}
          border={0}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  border: 0,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  p: 2,
                }}
                gap={2}
              >
                <TextField
                  label="name"
                  size="small"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                ></TextField>

                <TextField
                  label="cell"
                  size="small"
                  type="text"
                  value={cell}
                  onChange={(e) => setCell(e.target.value)}
                  fullWidth
                ></TextField>

                <TextField
                  label="email"
                  size="small"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></TextField>

                <TextField
                  label="Message"
                  size="small"
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={5} 
                  // sx={{ resize: "none", overflowY: "auto" }} 
                />
                <Box sx={{ border: 0 }}>
                  <Button
                    variant="contained"
                    sx={{
                      mb: 1,
                      borderRadius: 1,
                      ":hover": {
                        backgroundColor: "#fff",
                        color: "#fcba03",
                      },
                    }}
                    type="submit"
                  >
                    {" "}
                    CONNECT
                  </Button>
                </Box>
              </Box>
            </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
