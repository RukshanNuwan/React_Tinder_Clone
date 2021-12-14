import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './SwipeButton.css';

const SwipeButtons = () => {
  return (
    <div className={'swipe-buttons'}>
      <IconButton className={'swipe-buttons__repeat'}>
        <ReplayIcon fontSize={'large'}/>
      </IconButton>
      <IconButton className={'swipe-buttons__left'}>
        <CloseIcon fontSize={'large'}/>
      </IconButton>
      <IconButton className={'swipe-buttons__star'}>
        <StarRateIcon fontSize={'large'}/>
      </IconButton>
      <IconButton className={'swipe-buttons__right'}>
        <FavoriteIcon fontSize={'large'}/>
      </IconButton>
      <IconButton className={'swipe-buttons__lightning'}>
        <FlashOnIcon fontSize={'large'}/>
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
