import React, { useState, useEffect } from 'react';
import { Box, Input, Flex, Container, Select, Button } from '@chakra-ui/react';
import { ThemeContext } from '../../_app';
import fieldLineUp from '../../../utils/fieldLineUp';
import Cookies from "js-cookie";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoanCard from './loanCard';

const loansMultiplyFactor = 1000;

const LoansDeck = ({ loans, key, selectedNav, setLoanCounts }, ref) => {
	const [loansToRender, setLoansToRender] = useState(loans);
	const [loansByGroup, setLoansByGroup] = useState();
	const [expandedLoanGroup, setExpandedLoanGroup] = useState(null)
	const router = useRouter();
	
	useEffect(async() => {
		const groupingState = 'issue_month';
		const loansBySelectedGroup = loans.reduce((loan, value) => {
			if (!loan[value[groupingState]]) {
				loan[value[groupingState]] = {
					loans: [],
					loan_amnt_sec: 0,
					int_rate_sum: 0,
					default_probability_percent_updated_sum: 0,
					late_duration_days_total_sum: 0,
					loan_status_count: 0
				};
			}
		 
			// Grouping
			loan[value[groupingState]]['loans'] = [...loan[value[groupingState]]['loans'], value];
			loan[value[groupingState]]['loan_amnt_sec'] = loan[value[groupingState]]['loan_amnt_sec'] + parseInt(value['loan_amnt_sec'], "10")
			loan[value[groupingState]]['int_rate_sum'] = loan[value[groupingState]]['int_rate_sum'] + Number(value['interest_rate_percent'])
			loan[value[groupingState]]['default_probability_percent_updated_sum'] = loan[value[groupingState]]['default_probability_percent_updated_sum'] + Number(value['default_probability_percent_updated'])
			loan[value[groupingState]]['late_duration_days_total_sum'] = loan[value[groupingState]]['late_duration_days_total_sum'] + Number(value['late_duration_days_total'])
			if (value['loan_status'] === 'current') {
				// console.log('how many loans')
				loan[value[groupingState]]['loan_status_count'] = loan[value[groupingState]]['loan_status_count'] + 1;
			}
			return loan;
		}, {});
		setLoansToRender(loans)
		setLoansByGroup(loansBySelectedGroup)
	}, [loans])
	const currentMonths = ['January', 'February', 'March', 'April']
	const incomingMonths = ['May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]
	const monthsToRender = selectedNav === 'current' ? currentMonths : incomingMonths;
	if(!loansByGroup) return null;
	return (
		<ThemeContext.Consumer>
			{(theme) => {
				return (
					<Box
						w="100%"
						maxHeight={{ md: "100vh", sm: "auto" }}
						overflowY="scroll"
						ml={{ md: "30px", sm: "0px" }}
						mt={{ md: "0px", sm: "30px" }}
						mb="75px"
					>
						{monthsToRender.map((month, index) => {
							return (
								<Box
									mt={index === 0 ? '0px' : `40px`}
								>
									<Flex>
										<div style={{ width: '100%' }}>{month}</div>
										<div style={{ width: 'auto', display: 'flex' }}>
											<div
												style={{ padding: '5px 10px', cursor: 'pointer'}}
												onClick={() => setExpandedLoanGroup(month.slice(0,3))}
											>
												Expand
											</div>
											<div
												style={{ padding: '5px 10px', cursor: 'pointer', whiteSpace: 'nowrap' }}
												onClick={() => setExpandedLoanGroup(null)}
												
											>
												Collapse All
											</div>
										</div>
									</Flex>
									<Flex>
										{loansByGroup[month.slice(0,3)] ? (
											expandedLoanGroup === month.slice(0,3) ? (
												<Box w="100%">
													{loansByGroup[month.slice(0,3)]['loans'].map((loan, index) => {
														return (
															<Box
																mt={index === 0 ? '0px' : `15px`}
															>
																<LoanCard
																	index={index}
																	loan={loan}
																	setLoansToRender={setLoansToRender}
																	setLoanCounts={setLoanCounts}
																/>
															</Box>
														)
													})}
												</Box>
											) : (
												<Flex
													w="100%"
													border={`1px solid ${theme.colors.gray}`}
													borderRadius="3px"
													p="15px"
													mt={index === 0 ? '0px' : `5px`}
													alignItems="flex-end"
													flexDirection="column"
												>
													<Flex
														w="100%"
														flexWrap="wrap"
													>
														<Box
															w="18%"
														>
															<div style={{ fontWeight: '500' }}>
																Total Loan Amount
															</div>
															<div style={{ marginTop: '10px' }}>
																{fieldLineUp[0].format(Math.round(loansByGroup[month.slice(0,3)]['loan_amnt_sec']) * loansMultiplyFactor)}
															</div>
														</Box>
														<Box
															ml="10px"
															w="18%"
														>
															<div style={{ fontWeight: '500' }}>
																Average Interest Rate
															</div>
															<div style={{ marginTop: '10px' }}>
																{Math.round(loansByGroup[month.slice(0,3)]['int_rate_sum'] / loansByGroup[month.slice(0,3)]['loans'].length * 100) / 100}%
															</div>
														</Box>
														<Box
															ml="10px"
															w="18%"
														>
															<div style={{ fontWeight: '500' }}>
																Average Payment Probability
															</div>
															<div style={{ marginTop: '10px' }}>
																{100 - Math.round(loansByGroup[month.slice(0,3)]['default_probability_percent_updated_sum'] / loansByGroup[month.slice(0,3)]['loans'].length * 100) / 100}%
															</div>
														</Box>
														<Box
															ml="10px"
															w="18%"
														>
															<div style={{ fontWeight: '500' }}>
																Average Late Status Days
															</div>
															<div style={{ marginTop: '10px' }}>
																{Math.round(loansByGroup[month.slice(0,3)]['late_duration_days_total_sum'] / loansByGroup[month.slice(0,3)]['loans'].length) * 100 / 100}
															</div>
														</Box>
														<Box
															ml="10px"
															w="18%"
														>
															<div style={{ fontWeight: '500' }}>
																% of Current Loans
															</div>
															<div style={{ marginTop: '10px' }}>
																{(Math.round(loansByGroup[month.slice(0,3)]['loan_status_count'] / loansByGroup[month.slice(0,3)]['loans'].length * 100) / 100) * 100}%
															</div>
														</Box>
													</Flex>
													{selectedNav === 'current' && (
														<Box
															mt={{ md: "0px", sm: "20px"}}
														>
															<Button disabled>
																Purchased Loans
															</Button>
														</Box>
													)}
													{selectedNav === 'incoming' && (
														<Box
															mt="20px"
														>
															<Button>
																Commit to Buy
															</Button>
														</Box>
													)}
												</Flex>
											)
										) : (
											<Flex
												w="100%"
												border={`1px solid ${theme.colors.gray}`}
												borderRadius="3px"
												p="15px"
												mt={index === 0 ? '0px' : `5px`}
											>
												<div>
													<div style={{ fontWeight: '500' }}>
														Loan Amount
													</div>
													<div style={{ marginTop: '10px' }}>
														$0
													</div>
												</div>
												<Box
														ml="20px"
													>
														<div style={{ fontWeight: '500' }}>
															Average Interest Rate
														</div>
														<div style={{ marginTop: '10px' }}>
															0%
														</div>
													</Box>
											</Flex>
										)}
									</Flex>
								</Box>
							)})}
					</Box>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default LoansDeck;