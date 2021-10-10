import React, { useEffect, useState } from 'react';
import { ThemeContext } from '../_app';
import axios from "axios";
import Cookies from "js-cookie";
import graphLineUp from '../../utils/graphLineUp'
import { Box, Input, Flex, Container, Select } from '@chakra-ui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
	LabelList,
	PieChart,
	Pie,
	Sector,
	Cell,
	CartesianGrid
} from "recharts";
import PaisaPie from './reUsable/paisaPie';

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

	if(percent === 0) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const GraphView = ({ selectedNav, ...props }) => {
	const [approvedLoans, setApprovedLoans] = useState(null)
	const [selectedGrade, setSelectedGrade] = useState('all');
	useEffect(() => {
		const baseURL = `secondaryLenders/loans/${selectedNav.split(" ")[0]}`
		axios.get(baseURL, {
			headers: {
				pToken: Cookies.get('pToken')
			}
		})
		.then(({ data }) => {
			setApprovedLoans(data.loans)
		})
	}, [selectedNav])

	const barGraphDataByGrade = {
		'A': {
			category: 'A',
			categorySum: 0
		},
		'B': {
			category: 'B',
			categorySum: 0
		},
		'C': {
			category: 'C',
			categorySum: 0
		},
		'D': {
			category: 'D',
			categorySum: 0
		}
	};

	const barGraphDataByMonth = {
		'Jan': 'Jan',
		'Feb': 'Feb',
		'Mar': 'Mar',
		'Apr': 'Apr', 
		'May': 'May', 
		'Jun': 'Jun', 
		'Jul': 'Jul', 
		'Aug': 'Aug', 
		'Sep': 'Sep', 
		'Oct': 'Oct', 
		'Nov': 'Nov', 
		'Dec': 'Dec'
	};
	
	let approvedLoansMin = 1000000000000000000;
	let approvedLoansMax = 0;
	const barGraphDataHelper = approvedLoans && approvedLoans.map((each) => {
		// calculates the sum of each loan category
		if(Number(each.loan_amnt_sec) > approvedLoansMax) approvedLoansMax = Number(each.loan_amnt_sec);
		if(Number(each.loan_amnt_sec) < approvedLoansMin) approvedLoansMin = Number(each.loan_amnt_sec);
		if(each.loan_grade === 'A') { barGraphDataByGrade['A']['categorySum']+= Number(each.loan_amnt_sec) }
		if(each.loan_grade === 'B') { barGraphDataByGrade['B']['categorySum']+= Number(each.loan_amnt_sec) }
		if(each.loan_grade === 'C') { barGraphDataByGrade['C']['categorySum']+= Number(each.loan_amnt_sec) }
		if(each.loan_grade === 'D') { barGraphDataByGrade['D']['categorySum']+= Number(each.loan_amnt_sec) }
	});

	const loansBySelectedGroup = (groupingState) => approvedLoans && approvedLoans.reduce((loan, value) => {
		if (!loan[value[groupingState]]) {
			loan[value[groupingState]] = {
				loans: [],
				loan_amnt_sec: 0,
			};
		}
	 
		// Grouping
		loan[value[groupingState]]['loans'] = [...loan[value[groupingState]]['loans'], value];
		loan[value[groupingState]]['loan_amnt_sec'] = loan[value[groupingState]]['loan_amnt_sec'] + parseInt(value['loan_amnt_sec'], "10")
		return loan;
	}, {});

	// let loansByGrade = loansBySelectedGroup('loan_grade')
	let loansByMonth = loansBySelectedGroup('issue_month');
	let loansByAllMonths = { ...barGraphDataByMonth, ...loansByMonth }
	var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let loansByMonthGraphData = loansByMonth && Object.keys(loansByAllMonths).sort(function(a, b){
		return months.indexOf(a) - months.indexOf(b);
	}).map((each) => {
		if (loansByMonth[each]) {
			return {
				xAxis: each,
				monthTotal: loansByMonth[each].loan_amnt_sec
			}
		} else {
			return {
				xAxis: each,
				monthTotal: 0
			}
		}
	})
	const graphLineUpResult = graphLineUp(approvedLoans);
	const graphLineUpResultByGrade = approvedLoans && graphLineUp(approvedLoans.filter((each) => {
		if(selectedGrade === 'all') {
			return each
		} else {
			return each.loan_grade === selectedGrade
		}
	}));
	const principalPieChartData = graphLineUpResultByGrade && [
		{ name: "Total Principal Received", value: graphLineUpResultByGrade['total_princ_received'], fill: '#0088FE' },
		{ name: "Total Principal Pending", value: graphLineUpResultByGrade['total_princ_pending'], fill: '#dd7876' },
		{ name: "Total Principal Lost", value: graphLineUpResultByGrade['total_princ_lost'], fill: '#FFBB28' },
	];

	const loansByLoanStatus = loansBySelectedGroup('loan_status');
	const loanStatusPieChartData = loansByLoanStatus && Object.keys(loansByLoanStatus).map((each, index) => {
		return {
			name: each,
			value: loansByLoanStatus[each].loans.length,
		}
	})

	return (
		<ThemeContext.Consumer>
			{(theme) => {
				if(!approvedLoans) return null;
				return (
					<Container
						padding={{ sm: "0px", md: "inherit" }}
						key={selectedNav}
					>
						<Box
							mt="30px"
							fontWeight="700"
						>
							Loans Overview
						</Box>
						<Flex
							flexWrap="wrap"
							margin="auto"
							mt="30px"
							justifyContent={{ md: "center", sm: "space-between" }}
						>
							{graphLineUpResult.blocks.map((each, index) => {
								if(selectedNav === 'Incoming Stats' && each.title === 'Received Return') return null;
								if(selectedNav === 'Completed Stats' && each.title === 'Expected Returns') return null;
								if(each.value === 'NaN%') return null;
								return (
									<Flex
										key={index}
										mr={{ md: "10px", sm: "0px" }}
										mb="25px"
										w={{ md: "19%", sm: "48%" }}
										justifyContent="center"
										alignItems="center"
										border={`1px solid ${theme.colors.gray}`}
										borderRadius="3px"
										p="10px"
										flexDirection="column"
									>
										<Box>{each.title}</Box>
										<Box>{each.value}</Box>
									</Flex>
								)
							})}
						</Flex>
						<Flex
							mt="60px"
							flexWrap="wrap"
							alignItems="baseline"
							justifyContent="center"
						>
							<Flex
								w={{ md: "50%", sm: "100%" }}
								h="400px"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
							>
								<Flex fontWeight="700" mb="50px">
									Total Amount Across Grades
								</Flex>
								<BarChart
									width={400}
									height={300}
									data={Object.values(barGraphDataByGrade)}
									margin={{ left: 35, right: 50 }}
								>
									<CartesianGrid vertical={false} stroke="#ebf3f0" />
									<XAxis
										dataKey="category"
										fontSize="12"
										// angle="-20"
										// tickMargin={9}
									/>
									<YAxis
										type="number"
										// domain={[( dataMin) => parseInt(dataMin), (dataMax) =>parseInt(dataMax)]}
									/>
									<Tooltip />
									<Bar
										dataKey="categorySum"
										fill="red"
										barSize ={"170px"}
										fontFamily="sans-serif"
									>
										{Object.values(barGraphDataByGrade).map((each) => (
											<Cell fill={theme.colors.primary} />
										))}
									</Bar>
								</BarChart>
							</Flex>
							<Flex
								mt={{md: "0px", sm: "60px" }}
								w={{ md: "50%", sm: "100%" }}
								h="400px"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
							>
								<Flex fontWeight="700" mb="48px">
									Total Amount Across Months
								</Flex>
								<BarChart
									width={400}
									height={300}
									data={loansByMonthGraphData}
									margin={{ left: 25, right: 50 }}
								>
									<CartesianGrid vertical={false} stroke="#ebf3f0" />
									<XAxis
										dataKey="xAxis"
										fontSize="12"
										angle="-50"
										interval={0}
										tickMargin={9}
									/>
									<YAxis
										type="number"
										dataKey="monthTotal"
									/>
									<Tooltip />
									<Bar
										dataKey="monthTotal"
										fill="red"
										barSize ={"170px"}
										fontFamily="sans-serif"
									>
										{loansByMonthGraphData.map((each) => (
											<Cell fill={theme.colors.primary} />
										))}
									</Bar>
								</BarChart>
							</Flex>
						</Flex>
						<Flex
							w="100%"
							flexWrap="wrap"
							alignItems="baseline"
							mt={{sm: "75px", md: "125px" }}
						>
							<Flex
								w={{ md: "50%", sm: "100%" }}
								justifyContent="baseline"
								alignItems="center"
								flexDirection="column"
							>
								<Flex
									alignItems="center"
									flexDirection="column"
								>
									<Flex fontWeight="700" mb="20px">
										Loan Principal Amount
									</Flex>
									<Select
										mt="5px"
										name="loans"
										id="loans"
										onChange={(e) => setSelectedGrade(e.target.value)}
										style= {{border: `1px solid ${theme.colors.gray}`}}
									>
										{['all', 'A', 'B', 'C', 'D'].map((item, index) => {
											return(
												<option
													key={item}
													value={item}
													border={`1px solid ${theme.colors.gray}`}
												>
													{index===0 ? `All Loans` : `Grade ${item} Loans`}
												</option>
											)
										})}
									</Select>
								</Flex>
								<PaisaPie
									mt={{sm: "75px", md: "50px"}}
									data={principalPieChartData}
									showPieCrumbs={JSON.stringify(principalPieChartData.map((each) => each.value)) != JSON.stringify([0, 0, 0])}
								/>
							</Flex>
							<Flex
								w={{ md: "50%", sm: "100%" }}
								h="400px"
								justifyContent="center"
								alignItems="center"
								flexDirection="column"
								mt={{sm: "150px", md: "0px"}}
							>
								<Flex
									justifyContent="center"
								>
									<Flex fontWeight="700" mb="20px">
										Loans Status
									</Flex>
								</Flex>
								<PaisaPie 
									mt={{sm: "-20px", md: "58px"}}
									data={loanStatusPieChartData}
								/>
							</Flex>
						</Flex>
					</Container>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default GraphView