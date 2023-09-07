import { styled } from '@mui/material';

export const StyledCardsGrid = styled('div')<{ small?: boolean }>(
    ({ theme, small = false }) => ({
        gridTemplateColumns: `repeat(auto-fit, minmax(${
            small ? '250px' : '350px'
        }, 1fr))`,
        gridAutoRows: '1fr',
        gap: theme.spacing(2),
        display: 'grid',
    })
);