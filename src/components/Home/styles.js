import makeStyles from '@mui/styles/makeStyles';

export default makeStyles( (theme) => ({
        bg: {
            backgroundColor: "#ff9800",
            width: "100%"
        },
        pagination: {
            borderRadius: 4,
            marginTop: '1rem',
            padding: '16px',
          },
          gridContainer: {
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column-reverse',
            },
          },
}));