import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledMoneyBillsIcon = styled(MoneyBillsIcon)<{
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

function MoneyBillsIcon({
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
      className={`MoneyBillsIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M55.9203 35.9298L49.6803 12.4999C49.3903 11.4199 48.2903 10.7798 47.2203 11.0698L7.82031 21.6798H49.2503C50.3603 21.6798 51.2603 22.5798 51.2603 23.6998V39.2699L54.5103 38.3999C55.5803 38.1099 56.2203 36.9998 55.9303 35.9298H55.9203Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.24 49.9797H5.00998C3.89998 49.9797 3 49.0697 3 47.9597V23.7097C3 22.5897 3.89998 21.6897 5.00998 21.6897H49.24C50.35 21.6897 51.25 22.5897 51.25 23.7097V47.9597C51.25 49.0797 50.35 49.9797 49.24 49.9797Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.1203 44.9397C32.1185 44.9397 36.1703 40.8655 36.1703 35.8397C36.1703 30.8139 32.1185 26.7397 27.1203 26.7397C22.1222 26.7397 18.0703 30.8139 18.0703 35.8397C18.0703 40.8655 22.1222 44.9397 27.1203 44.9397Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.7902 37.8198C29.7902 36.8098 28.9002 35.9198 27.6802 35.7098L26.6302 35.4698C25.5602 35.2898 24.7902 34.5199 24.7902 33.6499C24.7902 32.6199 25.8402 31.7898 27.1202 31.7898C28.4002 31.7898 29.4502 32.6299 29.4502 33.6499C29.4502 33.6799 29.4702 33.6998 29.5002 33.6998C29.5302 33.6998 29.5502 33.6799 29.5502 33.6499C29.5502 32.5799 28.4902 31.7098 27.1702 31.6898V30.3699C27.1702 30.3699 27.1502 30.3198 27.1202 30.3198C27.0902 30.3198 27.0702 30.3399 27.0702 30.3699V31.6898C25.7502 31.7098 24.6902 32.5799 24.6902 33.6499C24.6902 34.5699 25.5002 35.3798 26.6102 35.5698L27.6602 35.8098C28.8402 36.0098 29.6902 36.8598 29.6902 37.8198C29.6902 38.9498 28.5402 39.8699 27.1202 39.8699C25.7002 39.8699 24.5502 38.9498 24.5502 37.8198C24.5502 37.7898 24.5302 37.7699 24.5002 37.7699C24.4702 37.7699 24.4502 37.7898 24.4502 37.8198C24.4502 38.9898 25.6202 39.9498 27.0702 39.9698V41.2898C27.0702 41.2898 27.0902 41.3398 27.1202 41.3398C27.1502 41.3398 27.1702 41.3198 27.1702 41.2898V39.9698C28.6202 39.9498 29.7902 38.9898 29.7902 37.8198Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.04 21.6897H5.00998C3.89998 21.6897 3 22.5897 3 23.7097V29.7698C7.44 29.7698 11.04 26.1497 11.04 21.6897Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.25 29.7698V23.7097C51.25 22.5897 50.35 21.6897 49.24 21.6897H43.21C43.21 26.1497 46.81 29.7698 51.25 29.7698Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 41.8999V47.9598C3 49.0798 3.89998 49.9799 5.00998 49.9799H11.04C11.04 45.5099 7.44 41.8999 3 41.8999Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.25 47.9598V41.8999C46.81 41.8999 43.21 45.5199 43.21 49.9799H49.24C50.35 49.9799 51.25 49.0698 51.25 47.9598Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MoneyBillsIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMoneyBillsIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
