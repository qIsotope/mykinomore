export const findPercentage = (curr: number | undefined, all: number | undefined): string | number | undefined => {
	if (all === 0) {
		return 0
	}
	if (curr !== undefined && all !== undefined) return (curr * 100 / all).toFixed(2)
}

