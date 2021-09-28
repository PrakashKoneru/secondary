const curencyFormatter = new Intl.NumberFormat('en-US', {
	currency: 'USD',
});
const fieldLineUp = [
	{
		title: 'Loan Amount',
		def: 'loan_amnt_sec',
		format: (value) => `$${curencyFormatter.format(value)}`
	},
	{
		title: 'Term',
		def: 'term',
		format: (value) => { return value.replace("_", " ") }
	},
	{
		title: 'Interest Rate',
		def: 'interest_rate_percent',
		format: (value) => { return `${value}%` }
	},
	{
		title: 'Annual Income',
		def: 'annual_inc',
		format: (value) => `$${curencyFormatter.format(value)}`
	},
	{
		title: 'Loan Sub Grade',
		def: 'loan_sub_grade',
		format: (value) => { return value }
	},
	{
		title: 'Payment Prob.',
		def: 'default_probability_percent_updated',
		format: (value) => { return `${(100 - Number(value).toFixed(2)).toFixed(2)}%` }
	},
];

export default fieldLineUp;