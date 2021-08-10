import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Body() {
  // eslint-disable-next-line
  const [{ hotHits }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header />
      
      <div className="body__info">
        <img 
          src={hotHits?.images[0].url}
          alt="" 
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{hotHits?.name}</h2>
          <p>{hotHits?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div>
          {hotHits?.tracks.items.map(item => (
            <SongRow key={item.track.id}  track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;