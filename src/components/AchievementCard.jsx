const AchievementCard = ({ imgUrl, title }) => {
	return (
		<div className="bg-[#ffffff] p-5 rounded-xl flex flex-col justify-center items-center mb-16 achieve">
			<img
				src={imgUrl}
				alt=""
				className="w-[30%] object-contain mb-4 rounded-lg min-h-[7rem] max-h-[15rem]"
			/>
			<span className="font-semibold text-center">{title}</span>
		</div>
	);
};

export default AchievementCard;