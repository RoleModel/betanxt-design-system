import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledHandshakeAgreementIcon = styled(HandshakeAgreementIcon)<{
  accentColor?: string
  fontSize?: BrandIconProps['fontSize']
}>(({ theme, accentColor = '#34C0F3', fontSize }) => [
  {
    fill: 'none',
    width: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    height: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    '& path:not([stroke])': {
      stroke: theme.vars.palette.text.primary,
    },
    '& path[stroke="#34C0F3"]': {
      stroke: accentColor,
    },
  },
])

function HandshakeAgreementIcon({
  accentColor = '#34C0F3',
  fontSize,
  className,
  ...props
}: BrandIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`HandshakeAgreementIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M27.8299 48.1801C26.7299 49.2801 24.9299 49.2801 23.8299 48.1801C22.7299 47.0801 22.7299 45.2801 23.8299 44.1801L25.1698 42.8401C26.2698 41.7401 28.0598 41.7401 29.1698 42.8401C30.2698 43.9401 30.2698 45.7401 29.1698 46.8401L27.8299 48.1801Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21.8299 46.1801C20.7299 47.2801 18.9299 47.2801 17.8299 46.1801C16.7299 45.0801 16.7299 43.2801 17.8299 42.1801L21.1698 38.8401C22.2698 37.7401 24.0598 37.7401 25.1698 38.8401C26.2698 39.9401 26.2698 41.7401 25.1698 42.8401L21.8299 46.1801Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17.8299 42.1801C16.7299 43.2801 14.9299 43.2801 13.8299 42.1801C12.7299 41.0801 12.7299 39.2801 13.8299 38.1801L17.1698 34.8401C18.2698 33.7401 20.0598 33.7401 21.1698 34.8401C22.2698 35.9401 22.2698 37.7401 21.1698 38.8401L17.8299 42.1801Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14.8299 37.1801C13.7299 38.2801 11.9299 38.2801 10.8299 37.1801C9.72988 36.0801 9.72988 34.2801 10.8299 33.1801L13.1698 30.8401C14.2698 29.7401 16.0598 29.7401 17.1698 30.8401C18.2698 31.9501 18.2698 33.7401 17.1698 34.8401L14.8299 37.1801Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33 41L38.17 46.17C39.27 47.27 41.06 47.27 42.17 46.17C43.27 45.06 43.27 43.27 42.17 42.17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 37L42.17 42.17C43.27 43.27 45.06 43.27 46.17 42.17C47.27 41.06 47.27 39.27 46.17 38.17L45.17 37.17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.8203 45.8198L32.1703 48.1699C33.2803 49.2699 35.0703 49.2699 36.1703 48.1699C37.2803 47.0699 37.2803 45.2799 36.1703 44.1699"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 33L45.17 37.17C46.4 38.4 48.49 38.26 49.53 36.74C50.3 35.61 50.06 34.07 49.1 33.1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59 30L54 33L43 13.95L48 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 30L6 33L17 13.95L12 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.4802 14.79C42.6602 14.92 41.8302 15.01 41.0002 15.01H30.4802C28.8902 15.01 27.3603 15.6399 25.7003 17.2999L23.8702 19.13C23.3102 19.69 22.9902 20.45 22.9902 21.25V29.01C22.9902 29.56 23.4402 30.01 23.9902 30.01H24.9902C27.2002 30.01 28.9902 28.22 28.9902 26.01V24.01C32.0302 20.97 36.9502 20.98 39.9902 24.01L49.0803 33.1L52.9003 31.13"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M7.08008 31.1299L10.9001 33.0999" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M29.4995 15.09C29.1795 15.04 28.8495 15 28.5195 15H18.9995C18.1695 15 17.3395 14.92 16.5195 14.78"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HandshakeAgreementIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHandshakeAgreementIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
