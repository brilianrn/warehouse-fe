import PropTypes from 'prop-types';

// material-ui
import { Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import { LOGO } from 'assets/images/index';
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
    const theme = useTheme();

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={1} alignItems="center">
                <img src={LOGO} alt="Warehose unik" height={40} />
                <Chip
                    label={process.env.REACT_APP_VERSION}
                    size="small"
                    sx={{ height: 16, '& .MuiChip-label': { fontSize: '0.625rem', py: 0.25 } }}
                    component="a"
                    href="https://github.com/brilianrn"
                    target="_blank"
                    clickable
                />
            </Stack>
        </DrawerHeaderStyled>
    );
};

DrawerHeader.propTypes = {
    open: PropTypes.bool
};

export default DrawerHeader;
