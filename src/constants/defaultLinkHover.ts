export const defaultLinkHoverProps = {
  position: 'relative',
  width: 'fit-content',
  display: 'inline-block',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    borderBottom: '1px solid white',
    transformOrigin: '100% 50%',
    transform: 'scaleX(0)',
    transition: 'transform .3s cubic-bezier(0.76, 0, 0.24, 1)',
  },
  '&:hover': {
    '&::before': {
      transformOrigin: '0% 50%',
      transform: 'scaleX(1)',
    }
  }
}