type Item = {
	categoryId: string;
	colors: string;
	cost: string;
	id: string;
	imageURL?: string;
	isFeatured: boolean;
	order: number; // the order to display
	prevCost?: string;
	productName: string;
};

type Category = {
	id: string;
	order: number;
	name: string;
	colorHex: string;
	imageBucketKey: string;
	imageURL?: string;
};
