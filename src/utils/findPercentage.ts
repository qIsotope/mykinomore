export const findPercentage = (curr: number | undefined, all: number | undefined): any | undefined => {

	if (curr !== undefined && all !== undefined) return (curr * 100 / all).toFixed(2)
}

