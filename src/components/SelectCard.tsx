import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import { Card, CardActionArea, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

type SelectCardProps = {
  text: string
  action: () => void
  selected: boolean
  icon: React.ReactNode
  direction?: 'row' | 'column'
}

function SelectCard({
  text,
  action,
  icon = <AssignmentTurnedInOutlinedIcon sx={{ width: 24, height: 24, color: "secondary.main" }} />,
  direction = 'row',
  selected = false,
}: SelectCardProps) {
  const theme = useTheme();

  if (direction === 'row') {
    return (
      <Card variant="outlined" sx={{
        minWidth: 200,
        '&:hover': {
          border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
        },
        '&:has([data-selected])': {
          border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
        },
      }}>
        <CardActionArea
          onClick={action}
          data-selected={selected ? '' : undefined}
          sx={{
            padding: 2,
            '&:hover': {
              backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.04)`,
            },
            '&[data-selected]': {
              backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
              '&:hover': {
                backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
              },
            },
          }}
        >
          <Stack spacing={1} direction="row">
            {icon}
            <Typography variant="button">
              {text}
            </Typography>
          </Stack>
        </CardActionArea>
      </Card>
    );
  }

  return (
    <Card variant="outlined" sx={{
      minWidth: 200,
      '&:hover': {
        border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
      },
      '&:has([data-selected])': {
        border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.5)`,
      },
    }}>
      <CardActionArea
        onClick={action}
        data-selected={selected ? '' : undefined}
        sx={{
          padding: 2,
          '&:hover': {
            backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.04)`,
          },
          '&[data-selected]': {
            backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
            '&:hover': {
              backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
            },
          },
        }}
      >
        <Stack spacing={1} direction="column" alignItems="start">
          {icon}
          <Typography
            variant="button"
          >
            {text}
          </Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default SelectCard;
