type Item = {
	category: string;
	colors: string;
	cost: string;
	id: string;
	imageBucketKey: string;
	imageURL?: string;
	isFeatured: boolean;
	prevCost?: string;
	productName: string;
};

type Category = {
	name: string;
	order: number;
	imageBucketKey: string;
	imageURL?: string;
};
