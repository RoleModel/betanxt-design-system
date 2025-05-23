import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { userEvent, waitFor, within } from '@storybook/test'
import React from 'react'

import { Box, Button, Slide, Snackbar, Typography } from '@mui/material'

import { Alert as AlertComponent, type CustomAlertProps } from '../components/Alert'

interface StoryArgs extends Omit<CustomAlertProps, 'onClose'> {
  onClose?: boolean | ((event: React.SyntheticEvent<Element, Event>) => void)
  action?: boolean
}

const meta = {
  title: 'Components/Alert',
  component: AlertComponent,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=16634-38351&t=DB0ilIbdxEUVV0VU-11',
    },
    controls: {
      expanded: true,
      sort: 'none',
    },
  },
  argTypes: {
    showicon: {
      control: 'boolean',
      name: 'Show Icon',
      description: 'Whether to show the icon',
    },
    elevation: {
      control: 'number',
      max: 24,
      min: 0,
      name: 'Elevation',
      description: 'The elevation of the alert',
    },
    action: {
      control: 'boolean',
      name: 'Show Action',
      description: 'Whether to show the action button',
    },
    actionButtonVariant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
      name: 'Action Button Variant',
      description: 'Button variant when action is true',
      if: { arg: 'action', truthy: true },
    },
    centertext: {
      control: 'boolean',
      name: 'Center Text',
      description: 'Whether to center text',
    },
    severity: {
      control: 'select',
      options: ['error', 'warning', 'info', 'success'],
      name: 'Severity',
      description: 'The severity of the alert',
    },
    variant: {
      control: 'select',
      options: ['standard', 'outlined', 'filled'],
      name: 'Variant',
      description: 'The variant to use',
    },
    bordertop: {
      control: 'boolean',
      name: 'Border Top',
      description: 'Whether to show a top border',
    },
    onClose: {
      control: 'boolean',
      name: 'Show Close',
      description: 'Show close icon',
    },
  },
  args: {
    title: 'Alert Title',
    children: 'This is an alert message.',
    severity: 'info',
    variant: 'filled',
    showicon: true,
    centertext: false,
    bordertop: false,
    elevation: 0,
  },
} as Meta<StoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
  name: 'Default Alert',
  args: {
    title: 'Alert Title',
    children: 'This is the alert message.',
    onClose: false,
    action: false,
    elevation: 0,
    variant: 'standard',
    severity: 'info',
  },
  render: function AlertRender(args) {
    const {
      action,
      actionButtonVariant,
      severity,
      onClose,
      elevation,
      bordertop,
      centertext,
      showicon,
      title,
      children,
      variant,
      ...otherProps
    } = args

    const handleClose = (event: React.SyntheticEvent<Element, Event>) => {
      console.log('Close clicked', event)
    }

    const actionButton = action ? (
      <Button
        size="large"
        color={severity}
        variant={actionButtonVariant || 'contained'}
        onClick={() => console.log('Action clicked')}
      >
        Action
      </Button>
    ) : undefined

    return (
      <AlertComponent
        title={title}
        variant={variant}
        elevation={elevation}
        severity={severity}
        onClose={onClose ? handleClose : undefined}
        action={actionButton}
        closeText="Close"
        bordertop={bordertop}
        centertext={centertext}
        showicon={showicon}
        {...otherProps}
      >
        {children}
      </AlertComponent>
    )
  },
}

export const Border: Story = {
  name: 'Top Border',
  args: {
    title: 'Standard Alert with Top Border',
    children: 'This is a standard info alert, bordertop true.',
    variant: 'outlined',
    severity: 'info',
    onClose: false,
    centertext: false,
    showicon: false,
    bordertop: true,
    elevation: 0,
    action: false,
  },
  render: Alert.render,
}

export const AlertWithAction: Story = {
  name: 'With Action',
  args: {
    title: 'Alert with Action',
    children: 'This is an alert with an action button.',
    action: true,
    severity: 'info',
    actionButtonVariant: 'contained',
    onClose: false,
    elevation: 0,
  },
  render: Alert.render,
}

// Alert in Snackbar demo
export const SnackBarAlert: Story = {
  args: {
    title: 'In a Snackbar',
    children: 'This alert appears in a Snackbar',
    severity: 'info',
    variant: 'filled',
    showicon: true,
    action: false,
    actionButtonVariant: 'text',
    onClose: true,
    elevation: 10,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'This demo shows an Alert inside a Snackbar component, positioned at the top-right of the screen.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Verify alert appears and is visible', async () => {
      const alert = await canvas.findByTestId('alert', {}, { timeout: 2000 })
      expect(alert).toBeInTheDocument()
      expect(alert).toBeVisible()

      console.log('[Test] Alert is visible. Pausing for 2 seconds...')
      await new Promise((resolve) => setTimeout(resolve, 2000))
    })

    await step('Verify alert dismisses when close button is clicked', async () => {
      const alertToClose = canvas.getByTestId('alert')
      expect(alertToClose).toBeVisible()

      const closeButton = within(alertToClose).getByRole('button', { name: /close/i })

      console.log('[Test] Attempting to click close button...', closeButton)
      await userEvent.click(closeButton)
      console.log('[Test] Close button clicked.')

      await waitFor(
        () => {
          expect(canvas.queryByTestId('alert')).not.toBeInTheDocument()
        },
        { timeout: 3000 }
      )
    })
  },
  render: function SnackBarAlertDemo(args) {
    const [open, setOpen] = React.useState(false)
    const [timeLeft, setTimeLeft] = React.useState(60)

    // Auto show after delay
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 500)

      return () => clearTimeout(timer)
    }, [])

    // Countdown timer
    React.useEffect(() => {
      let interval: ReturnType<typeof setInterval> | null = null

      if (open && timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((prev) => {
            const newValue = prev - 1
            if (newValue <= 0) {
              setOpen(false)
              return 0
            }
            return newValue
          })
        }, 1000)
      }

      return () => {
        if (interval) clearInterval(interval)
      }
    }, [open, timeLeft])

    // Handle Alert close button
    const handleAlertClose = (event?: React.SyntheticEvent<Element, Event>) => {
      setOpen(false)
    }

    // Handle Snackbar close events
    const handleSnackbarClose = (
      event: Event | React.SyntheticEvent<any, Event>,
      reason?: string
    ) => {
      // Only close for specific reasons, not when clicking away
      if (reason !== 'clickaway') {
        setOpen(false)
      }
    }

    // Reset demo
    const handleReset = () => {
      setTimeLeft(60)
      setOpen(true)
    }

    // Extract props we need to handle specially
    const { action, actionButtonVariant, severity, onClose, elevation, ...otherProps } =
      args

    // Create action button if action=true
    const actionButton = action ? (
      <Button
        size="large"
        color={severity}
        variant={actionButtonVariant || 'text'}
        onClick={() => console.log('Action clicked')}
      >
        Action
      </Button>
    ) : undefined

    // Handle close button properly
    const closeHandler = onClose ? handleAlertClose : undefined

    return (
      <Box sx={{ minHeight: 500, p: 2 }}>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            slots={{ transition: Slide }}
            slotProps={{
              transition: {
                direction: 'left',
                timeout: 300,
                unmountOnExit: true,
                onExited: () => {
                  console.log('[Test Diagnostic] Slide transition onExited triggered.')
                },
              },
            }}
            onClose={handleSnackbarClose}
            autoHideDuration={60000}
            disableWindowBlurListener={true}
            data-testid="snackbar"
          >
            <AlertComponent
              {...otherProps}
              elevation={elevation}
              severity={severity}
              onClose={closeHandler}
              action={actionButton}
              data-testid="alert"
            />
          </Snackbar>

        <Button
          variant="contained"
          color="primary"
          onClick={handleReset}
          style={{ display: open ? 'none' : 'inline-flex' }}
        >
          Show Alert
        </Button>

        {open && (
          <Typography color="text.secondary" variant="caption">
            Auto-dismissing in {timeLeft}s
          </Typography>
        )}
      </Box>
    )
  },
}
