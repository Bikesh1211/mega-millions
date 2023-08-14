import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

interface LotteryResultProps {
  prizeHeadings: string;
  winningNumbers: number[];
  matchedNumbers: number[];
}

const LotteryResult: React.FC<LotteryResultProps> = ({
  prizeHeadings,
  winningNumbers,
  matchedNumbers,
}) => {
  const commonNumbers = matchedNumbers.filter((num) =>
    winningNumbers.includes(num)
  );

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      {prizeHeadings === "Jackpot!" ? (
        <Typography variant="h5" align="center" color="#00c853">
          Congratulations! You've won the Jackpot!
        </Typography>
      ) : (
        <Typography variant="h6" align="center" color="#01579b">
          {prizeHeadings}
        </Typography>
      )}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack spacing={1} mt={3}>
          <Typography variant="subtitle1" color="textSecondary">
            Winning Numbers
          </Typography>
          <Typography variant="body1">{winningNumbers.join(", ")}</Typography>
        </Stack>

        {commonNumbers.length > 0 && (
          <Stack spacing={1} mt={3}>
            <Typography variant="subtitle1" color="textSecondary">
              Matched Numbers
            </Typography>
            <Typography variant="body1">{commonNumbers.join(", ")}</Typography>
          </Stack>
        )}
      </Stack>

      {commonNumbers.length === 0 && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mt={3}
        >
          <ErrorIcon color="error" fontSize="large" />
          <Typography variant="subtitle1" color="error">
            Sorry, No Matched Numbers
          </Typography>
        </Stack>
      )}
    </Paper>
  );
};

export default LotteryResult;
