import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Illustration from "./Illustrations";

interface SuccessMessageProps {
  title?: string;
  message?: string;
  onContinue?: () => void;
  continueText?: string;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title = "Success!",
  message = "Your action was completed successfully.",
  onContinue,
  continueText = "Continue",
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
    >
      <Illustration type="success" width={200} height={200} />
      <Typography variant="h4" color="primary" gutterBottom sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 3, maxWidth: "400px" }}
      >
        {message}
      </Typography>
      {onContinue && (
        <Button
          variant="contained"
          color="primary"
          onClick={onContinue}
          size="large"
        >
          {continueText}
        </Button>
      )}
    </Box>
  );
};

export default SuccessMessage;
