import { all, takeLatest } from "redux-saga/effects";
import { Types as PLaylistsTypes } from "../ducks/playlists";
import { Types as PLaylistDetailsTypes } from "../ducks/playlistDetails";

import { getPlaylists } from "./playlists";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
	yield all([
		takeLatest(PLaylistsTypes.GET_REQUEST, getPlaylists),
		takeLatest(PLaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)
	]);
}
