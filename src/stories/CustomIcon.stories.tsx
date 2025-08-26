import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import {
  AttachNewIcon,
  AttachedFileIcon,
  BarChartNoStackingIcon,
  BarChartStacked100Icon,
  BarChartStackedIcon,
  CheckmarkIcon,
  ColumnResizeIcon,
  CsvIcon,
  DocIcon,
  ElectronicConsentLeftAlignedIcon,
  HtmlIcon,
  IconForFileType,
  NavAccountsIcon,
  NoDataIcon,
  PdfIcon,
  TxtIcon,
  VerticalBarChartIcon,
  XlsIcon,
  XlsxIcon,
} from '../components/icons'
import * as BrandIcon from '../components/icons/brand'

const meta = {
  title: 'Custom Components/Icons',
  component: DocIcon,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Custom icon components.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-148609&t=xWHzDIxL8PIrrG5G-11',
    },
  },
} satisfies Meta<typeof DocIcon>

export default meta

type Story = StoryObj<typeof meta>
type IconForFileTypeStory = StoryObj<typeof IconForFileType>
export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <Grid container spacing={3}>
      {[
        { name: 'XlsIcon', component: <XlsIcon sx={{ fontSize: 24 }} /> },
        { name: 'XlsxIcon', component: <XlsxIcon sx={{ fontSize: 24 }} /> },
        { name: 'HtmlIcon', component: <HtmlIcon sx={{ fontSize: 24 }} /> },
        { name: 'PdfIcon', component: <PdfIcon sx={{ fontSize: 24 }} /> },
        { name: 'DocIcon', component: <DocIcon sx={{ fontSize: 24 }} /> },
        { name: 'TxtIcon', component: <TxtIcon sx={{ fontSize: 24 }} /> },
        { name: 'CsvIcon', component: <CsvIcon sx={{ fontSize: 24 }} /> },
        { name: 'AttachNewIcon', component: <AttachNewIcon sx={{ fontSize: 24 }} /> },
        {
          name: 'AttachedFileIcon',
          component: <AttachedFileIcon sx={{ fontSize: 24 }} />,
        },
        { name: 'NavAccountsIcon', component: <NavAccountsIcon sx={{ fontSize: 24 }} /> },
        {
          name: 'ColumnResizeIcon',
          component: <ColumnResizeIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'VerticalBarChartIcon',
          component: <VerticalBarChartIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartNoStackingIcon',
          component: <BarChartNoStackingIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartStackedIcon',
          component: <BarChartStackedIcon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'BarChartStacked100Icon',
          component: <BarChartStacked100Icon sx={{ fontSize: 24 }} />,
        },
        {
          name: 'ElectronicConsentLeftAlignedIcon',
          component: <ElectronicConsentLeftAlignedIcon sx={{ fontSize: 24 }} />,
        },
        { name: 'NoDataIcon', component: <NoDataIcon sx={{ fontSize: 100 }} /> },
        { name: 'CheckmarkIcon', component: <CheckmarkIcon sx={{ fontSize: 60 }} /> },
      ].map(({ name, component }) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={name}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              p: 2,
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              color: 'action.active',
            }}
          >
            {component}
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', fontSize: '0.75rem' }}
            >
              {name}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  ),
}

export const IconForFileTypeDemo: IconForFileTypeStory = {
  name: 'IconForFileType',
  render: (args) => (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Selected File Type:
        </Typography>
        <Typography variant="body2" gutterBottom>
          IconForFileType is a wrapper component that displays the appropriate icon for a
          given file type.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            p: 2,
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
            color: 'action.active',
          }}
        >
          <IconForFileType fileType={args.fileType} />
          <Typography variant="caption">{args.fileType}</Typography>
        </Box>
      </Box>

      <Typography variant="h6" gutterBottom>
        All Supported File Types:
      </Typography>
      <Grid container spacing={2}>
        {['PDF', 'HTML', 'TXT', 'XLS', 'XLSX', 'CSV', 'DOC'].map((fileType) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={fileType}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                p: 2,
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                color: 'action.active',
              }}
            >
              <IconForFileType fileType={fileType as any} />
              <Typography variant="caption">{fileType}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ),
  args: {
    fileType: 'PDF',
  },
  argTypes: {
    fileType: {
      control: 'select',
      options: ['PDF', 'HTML', 'TXT', 'XLS', 'XLSX', 'CSV', 'DOC'],
      description: 'File type to display the appropriate icon',
    },
  },
}

export const BetaNXTBrandIcon: Story = {
  name: 'BetaNXT Brand Icons',
  render: () => (
    <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={2}>
      <BrandIcon.AnalyticsChartIcon fontSize="4xl" />
      <BrandIcon.AreaChartIcon fontSize="4xl" />
      <BrandIcon.ArmStrongIcon fontSize="4xl" />
      <BrandIcon.ArrowDirectionsIcon fontSize="4xl" />
      <BrandIcon.ArrowsNorthEastIcon fontSize="4xl" />
      <BrandIcon.AudioLevelsIcon fontSize="4xl" />
      <BrandIcon.BarChartIcon fontSize="4xl" />
      <BrandIcon.BinaryCodeIcon fontSize="4xl" />
      <BrandIcon.BrainMindIcon fontSize="4xl" />
      <BrandIcon.BriefcaseIcon fontSize="4xl" />
      <BrandIcon.BuildingBankIcon fontSize="4xl" />
      <BrandIcon.CalculatorIcon fontSize="4xl" />
      <BrandIcon.ChartAnalysisIcon fontSize="4xl" />
      <BrandIcon.ChartBarsIcon fontSize="4xl" />
      <BrandIcon.ChartGrowthIcon fontSize="4xl" />
      <BrandIcon.ChartUptrendIcon fontSize="4xl" />
      <BrandIcon.ChatQuestionIcon fontSize="4xl" />
      <BrandIcon.ChecklistDocumentIcon fontSize="4xl" />
      <BrandIcon.ChemistryLabIcon fontSize="4xl" />
      <BrandIcon.ChessStrategyIcon fontSize="4xl" />
      <BrandIcon.CoinRefreshIcon fontSize="4xl" />
      <BrandIcon.CommentsIcon fontSize="4xl" />
      <BrandIcon.DatabaseStackIcon fontSize="4xl" />
      <BrandIcon.DiamondShapeIcon fontSize="4xl" />
      <BrandIcon.DigitalLibraryIcon fontSize="4xl" />
      <BrandIcon.DocumentEditIcon fontSize="4xl" />
      <BrandIcon.DocumentListIcon fontSize="4xl" />
      <BrandIcon.DocumentStackIcon fontSize="4xl" />
      <BrandIcon.DocumentTextIcon fontSize="4xl" />
      <BrandIcon.DollarExchangeIcon fontSize="4xl" />
      <BrandIcon.DollarIcon fontSize="4xl" />
      <BrandIcon.DotsLoadingIcon fontSize="4xl" />
      <BrandIcon.FastTimeIcon fontSize="4xl" />
      <BrandIcon.FileSearchIcon fontSize="4xl" />
      <BrandIcon.FilterFunnelIcon fontSize="4xl" />
      <BrandIcon.FlagHolderIcon fontSize="4xl" />
      <BrandIcon.FlameIcon fontSize="4xl" />
      <BrandIcon.GaugeDashboardIcon fontSize="4xl" />
      <BrandIcon.GearProcessIcon fontSize="4xl" />
      <BrandIcon.GearSettings2Icon fontSize="4xl" />
      <BrandIcon.GearsSettingsIcon fontSize="4xl" />
      <BrandIcon.GearToolIcon fontSize="4xl" />
      <BrandIcon.GlobalTeamIcon fontSize="4xl" />
      <BrandIcon.GlobeNetworkIcon fontSize="4xl" />
      <BrandIcon.GlobePersonIcon fontSize="4xl" />
      <BrandIcon.GlobeStandIcon fontSize="4xl" />
      <BrandIcon.GroupMeetingIcon fontSize="4xl" />
      <BrandIcon.GrowingUpIcon fontSize="4xl" />
      <BrandIcon.HandClickIcon fontSize="4xl" />
      <BrandIcon.HandCoinIcon fontSize="4xl" />
      <BrandIcon.HandPlantIcon fontSize="4xl" />
      <BrandIcon.HandsCareIcon fontSize="4xl" />
      <BrandIcon.HandshakeAgreementIcon fontSize="4xl" />
      <BrandIcon.HandshakeDealIcon fontSize="4xl" />
      <BrandIcon.HandSmartphoneIcon fontSize="4xl" />
      <BrandIcon.HandTouchIcon fontSize="4xl" />
      <BrandIcon.HeadProfileIcon fontSize="4xl" />
      <BrandIcon.HeadstoneIcon fontSize="4xl" />
      <BrandIcon.HeadThoughtIcon fontSize="4xl" />
      <BrandIcon.HourglassIcon fontSize="4xl" />
      <BrandIcon.JusticeScaleIcon fontSize="4xl" />
      <BrandIcon.LaptopPlayIcon fontSize="4xl" />
      <BrandIcon.LaptopVideoIcon fontSize="4xl" />
      <BrandIcon.LayersStackIcon fontSize="4xl" />
      <BrandIcon.LightbulbGearIcon fontSize="4xl" />
      <BrandIcon.LightbulbOnIcon fontSize="4xl" />
      <BrandIcon.LineChartIcon fontSize="4xl" />
      <BrandIcon.MagnifyingGlassIcon fontSize="4xl" />
      <BrandIcon.MeetingPresentIcon fontSize="4xl" />
      <BrandIcon.MoneyBag1Icon fontSize="4xl" />
      <BrandIcon.MoneyBagIcon fontSize="4xl" />
      <BrandIcon.MoneyBillsIcon fontSize="4xl" />
      <BrandIcon.MoneyGrowthIcon fontSize="4xl" />
      <BrandIcon.MonitorDesktopIcon fontSize="4xl" />
      <BrandIcon.MonitorLayoutIcon fontSize="4xl" />
      <BrandIcon.MountainChartIcon fontSize="4xl" />
      <BrandIcon.NetworkHubIcon fontSize="4xl" />
      <BrandIcon.NetworkPeopleIcon fontSize="4xl" />
      <BrandIcon.NetworkShareIcon fontSize="4xl" />
      <BrandIcon.PeronHairIcon fontSize="4xl" />
      <BrandIcon.PersonArmsUpIcon fontSize="4xl" />
      <BrandIcon.PersonAvatarIcon fontSize="4xl" />
      <BrandIcon.PersonCelebrateIcon fontSize="4xl" />
      <BrandIcon.PersonCoinIcon fontSize="4xl" />
      <BrandIcon.PersonConnectIcon fontSize="4xl" />
      <BrandIcon.PersonDeskIcon fontSize="4xl" />
      <BrandIcon.PersonDuoIcon fontSize="4xl" />
      <BrandIcon.PersonFemaleIcon fontSize="4xl" />
      <BrandIcon.PersonFlagIcon fontSize="4xl" />
      <BrandIcon.PersonGrowthIcon fontSize="4xl" />
      <BrandIcon.PersonKeyIcon fontSize="4xl" />
      <BrandIcon.PersonLightbulbIcon fontSize="4xl" />
      <BrandIcon.PersonShieldIcon fontSize="4xl" />
      <BrandIcon.PieChart2Icon fontSize="4xl" />
      <BrandIcon.PieChartIcon fontSize="4xl" />
      <BrandIcon.PresentationBoardIcon fontSize="4xl" />
      <BrandIcon.ProcessorIcon fontSize="4xl" />
      <BrandIcon.PuzzleCogIcon fontSize="4xl" />
      <BrandIcon.PuzzleHandIcon fontSize="4xl" />
      <BrandIcon.PuzzleHeadIcon fontSize="4xl" />
      <BrandIcon.PuzzlePieceIcon fontSize="4xl" />
      <BrandIcon.PyramidHierarchyIcon fontSize="4xl" />
      <BrandIcon.Rocket1Icon fontSize="4xl" />
      <BrandIcon.RocketIcon fontSize="4xl" />
      <BrandIcon.RunningIcon fontSize="4xl" />
      <BrandIcon.SearchAnalyticsIcon fontSize="4xl" />
      <BrandIcon.ServerDatabaseIcon fontSize="4xl" />
      <BrandIcon.SmartphoneChart2Icon fontSize="4xl" />
      <BrandIcon.SmartphoneChartIcon fontSize="4xl" />
      <BrandIcon.SpeeddialIcon fontSize="4xl" />
      <BrandIcon.SpeedometerIcon fontSize="4xl" />
      <BrandIcon.StarBadgeIcon fontSize="4xl" />
      <BrandIcon.TargetAimIcon fontSize="4xl" />
      <BrandIcon.TargetBullseye1Icon fontSize="4xl" />
      <BrandIcon.TargetBullseyeIcon fontSize="4xl" />
      <BrandIcon.TargetCrosshairIcon fontSize="4xl" />
      <BrandIcon.TeamBoardIcon fontSize="4xl" />
      <BrandIcon.TeamCelebrationIcon fontSize="4xl" />
      <BrandIcon.TeamCheckIcon fontSize="4xl" />
      <BrandIcon.TeamCircle2Icon fontSize="4xl" />
      <BrandIcon.TeamCircle3Icon fontSize="4xl" />
      <BrandIcon.TeamCircleIcon fontSize="4xl" />
      <BrandIcon.TeamClockIcon fontSize="4xl" />
      <BrandIcon.TeamConnect2Icon fontSize="4xl" />
      <BrandIcon.TeamConnectIcon fontSize="4xl" />
      <BrandIcon.TeamDiscussionIcon fontSize="4xl" />
      <BrandIcon.TeamDuoIcon fontSize="4xl" />
      <BrandIcon.TeamFormalIcon fontSize="4xl" />
      <BrandIcon.TeamGroupIcon fontSize="4xl" />
      <BrandIcon.TeamGrowthIcon fontSize="4xl" />
      <BrandIcon.TeamHandshake2Icon fontSize="4xl" />
      <BrandIcon.TeamHandshakeIcon fontSize="4xl" />
      <BrandIcon.TeamHierarchyIcon fontSize="4xl" />
      <BrandIcon.TeamMeeting2Icon fontSize="4xl" />
      <BrandIcon.TeamPhotoIcon fontSize="4xl" />
      <BrandIcon.TeamPresentationIcon fontSize="4xl" />
      <BrandIcon.TeamPuzzleIcon fontSize="4xl" />
      <BrandIcon.TeamPyramidIcon fontSize="4xl" />
      <BrandIcon.TeamQuestionIcon fontSize="4xl" />
      <BrandIcon.TeamStructureIcon fontSize="4xl" />
      <BrandIcon.TeamSuccessIcon fontSize="4xl" />
      <BrandIcon.TeamTimeIcon fontSize="4xl" />
      <BrandIcon.TeamUmbrellaIcon fontSize="4xl" />
      <BrandIcon.TimerClockIcon fontSize="4xl" />
      <BrandIcon.TimerStopwatchIcon fontSize="4xl" />
      <BrandIcon.TrendingUpIcon fontSize="4xl" />
      <BrandIcon.TrophyAwardIcon fontSize="4xl" />
      <BrandIcon.ValueIcon fontSize="4xl" />
    </Box>
  ),
}
