import React from "react";
import Slider from "rc-slider";
import Sound from "react-sound";
import {
	Container,
	Current,
	Volume,
	Progress,
	Controls,
	Time,
	ProgressSlider
} from "../Player/styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PLayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
	<Container>
		{/* <Sound url="" /> */}
		<Current>
			<img
				src="https://i.pinimg.com/originals/e1/2e/24/e12e24f65047a156ec11fc8381df8eac.jpg"
				alt="Cover"
			/>

			<div>
				<span>In The End</span>
				<small>Linkin Park</small>
			</div>
		</Current>

		<Progress>
			<Controls>
				<button>
					<img src={ShuffleIcon} alt="Shuffle" />
				</button>
				<button>
					<img src={BackwardIcon} alt="Backward" />
				</button>
				<button>
					<img src={PLayIcon} alt="PLay" />
				</button>
				{/* <button>
					<img src={PauseIcon} alt="Pause" />
				</button> */}
				<button>
					<img src={ForwardIcon} alt="Forward" />
				</button>
				<button>
					<img src={RepeatIcon} alt="Repeat" />
				</button>
			</Controls>
			<Time>
				<span>1:39</span>
				<ProgressSlider>
					<Slider
						railStyle={{ background: "#404040", borderRadius: 10 }}
						trackStyle={{ background: "#1Ed760" }}
						handleStyle={{ border: 0 }}
					/>
				</ProgressSlider>
				<span>4:24</span>
			</Time>
		</Progress>

		<Volume>
			<img src={VolumeIcon} alt="Volume" />
			<Slider
				railStyle={{ background: "#404040", borderRadius: 10 }}
				trackStyle={{ background: "#fff" }}
				handleStyle={{ display: "none" }}
				value={100}
			/>
		</Volume>
	</Container>
);

export default Player;
