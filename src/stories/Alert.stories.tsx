import type { Meta, StoryObj } from '@storybook/react'
import { expect } from '@storybook/test'
import { waitFor, within } from '@storybook/test'
import React from 'react'

import { Button, Slide, Snackbar } from '@mui/material'

import { Alert as AlertComponent, type CustomAlertProps } from '../components/Alert'

// Story args type that extends the props but allows boolean for onClose and action
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
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/branch/6xVeY0ZT7Cxvci7Sjnnfb5/MUI-v6.1.0?node-id=1545-39505&t=Z4OkKTYbCB293XlG-11',
    },
    controls: {
      expanded: true,
      sort: 'alpha',
    },
  },
  argTypes: {
    showIcon: {
      control: 'boolean',
      name: 'Show Icon',
      description: 'Whether to show the icon',
    },
    action: {
      control: 'boolean',
      name: 'Show Action Button',
      description: 'Whether to show an action button',
    },
    actionButtonVariant: {
      control: 'select',
      options: ['text', 'contained', 'outlined'],
      name: 'Action Button Variant',
      description: 'Button variant when action is true',
      if: { arg: 'action', truthy: true },
    },
    showTopBorder: {
      control: 'boolean',
      name: 'Show Top Border',
      description: 'Whether to show a top border',
    },
    centerText: {
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
    onClose: {
      control: 'boolean',
      name: 'Show Close Button',
      description: 'Show close button',
    },
  },
  args: {
    title: 'Alert Title',
    children: 'This is an alert message.',
    severity: 'error',
    variant: 'filled',
    showTopBorder: false,
    showIcon: true,
    centerText: false,
  },
} as Meta<StoryArgs>

export default meta

type Story = StoryObj<typeof meta>

export const Alert: Story = {
  args: {
    title: 'Default Alert',
    children: 'This is a default alert.',
    onClose: false,
    action: false,
  },
  render: function AlertRender(args) {
    const { action, actionButtonVariant, severity, onClose, ...otherProps } = args

    // Handle close button (convert boolean to function)
    const handleClose = (event: React.SyntheticEvent<Element, Event>) => {
      console.log('Close clicked', event)
    }

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

    return (
      <AlertComponent
        {...otherProps}
        severity={severity}
        onClose={onClose ? handleClose : undefined}
        action={actionButton}
        closeText="Close"
      />
    )
  },
}

// Alert in Snackbar demo
export const SnackBarAlert: Story = {
  args: {
    title: 'Snackbar Alert',
    children: 'This alert appears in a Snackbar and stays visible for 60 seconds.',
    severity: 'info',
    variant: 'outlined',
    showIcon: true,
    action: false,
    actionButtonVariant: 'text',
    onClose: true,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story:
          'This demo shows an Alert inside a Snackbar component, positioned at the top-right of the screen.',
      },
    },
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    // Wait for the alert to appear (it auto-shows after 500ms)
    await step('Verify alert appears', async () => {
      await waitFor(
        async () => {
          const alert = await canvas.findByTestId('alert')
          expect(alert).toBeInTheDocument()
        },
        { timeout: 2000 }
      )
    })

    // Test that clicking the close button dismisses the alert
    await step('Verify alert dismisses when close button is clicked', async () => {
      // Find the close button within the alert
      const alert = canvas.getByTestId('alert')
      const closeButton = within(alert).getByRole('button', { name: /close/i })

      // Click the close button
      await closeButton.click()

      // Wait for the alert to disappear
      await waitFor(
        () => {
          expect(canvas.queryByTestId('alert')).not.toBeInTheDocument()
        },
        { timeout: 1000 }
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
    const { action, actionButtonVariant, severity, onClose, ...otherProps } = args

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
      <>
        <div onClick={(e) => e.stopPropagation()}>
          <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            slots={{ transition: Slide }}
            onClose={handleSnackbarClose}
            autoHideDuration={60000}
            disableWindowBlurListener={true}
            data-testid="snackbar"
          >
            <AlertComponent
              {...otherProps}
              severity={severity}
              onClose={closeHandler}
              action={actionButton}
              data-testid="alert"
            />
          </Snackbar>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleReset}
          style={{ display: open ? 'none' : 'inline-flex' }}
        >
          Show Alert
        </Button>

        {open && (
          <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
            Auto-dismissing in {timeLeft}s
          </div>
        )}
      </>
    )
  },
}
