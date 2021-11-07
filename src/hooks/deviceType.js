import { useEffect, useState } from "react";

function getDeviceDimention() {
	let width = 0;
	let height = 0;

	if (typeof window !== "undefined") {
		// it's safe to use window now
		width = window.innerWidth > 0 ? window.innerWidth : window.screen.width;
		height = window.innerHeight > 0 ? window.innerHeight : window.screen.height;
	}

	return { width: width, height: height };
}

const useDeviceType = () => {
	const [deviceType, setDeviceType] = useState("mobile");

	console.log("here");
	useEffect(() => {
		const isMobile = getDeviceDimention().width < 1280;
		if (isMobile) {
			setDeviceType("mobile");
		} else {
			console.log("Desktop display");
			console.log(deviceType);
			setDeviceType("desktop");
		}

		if (typeof window !== "undefined") {
			window.addEventListener(
				"resize",
				function () {
					const isMobile = getDeviceDimention().width < 1280;
					if (isMobile) {
						setDeviceType("mobile");
					} else {
						console.log("Desktop display");
						console.log(deviceType);
						setDeviceType("desktop");
					}
				},
				true
			);
		} else {
			console.error("Error::useDeviceType:: Window is null");
		}
	}, [deviceType]);

	return deviceType;
};

export default useDeviceType;
