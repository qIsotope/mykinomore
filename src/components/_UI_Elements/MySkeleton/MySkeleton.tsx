import ContentLoader from "react-content-loader"

export const MySkeleton = (props: any) => (
	<ContentLoader
		speed={2}
		width={900}
		height={128}
		viewBox="0 0 900 128"
		backgroundColor="#cfc9c9"
		foregroundColor="#000000"
		{...props}
	>
		<rect x="14" y="15" rx="0" ry="0" width="72" height="103" />
		<rect x="117" y="17" rx="0" ry="0" width="251" height="20" />
		<rect x="117" y="48" rx="0" ry="0" width="112" height="18" />
		<rect x="117" y="80" rx="0" ry="0" width="420" height="36" />
		<rect x="700" y="51" rx="0" ry="0" width="27" height="21" />
		<rect x="740" y="51" rx="0" ry="0" width="143" height="20" />
	</ContentLoader>
)


