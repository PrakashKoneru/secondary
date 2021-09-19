import React, { useState, useEffect } from 'react';
import { Box, Input, Flex, Container, Select, Button } from '@chakra-ui/react';
import { ThemeContext } from '../../_app';
import fieldLineUp from '../../../utils/fieldLineUp';
import Cookies from "js-cookie";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoanCard from './loanCard';

const LoansDeck = ({ loans, key, sortBy, filterBy, setLoanCounts }, ref) => {
	const [loansToRender, setLoansToRender] = useState(loans);
	const [loansByGroup, setLoansByGroup] = useState();
	const [expandedLoanGroup, setExpandedLoanGroup] = useState(null)
	const router = useRouter();
	// const updateLoan = ({ loan_id, approval_status }) => {
	// 	const baseURL =  '/secondary/secondaryLenders/loans/update';
	// 	axios.post(baseURL,
	// 		{ loan_id, approval_status },
	// 		{
	// 			headers: {
	// 				pToken: Cookies.get('pToken')
	// 			}
	// 		}
	// 	).then(({ data: { loans } }) => {
	// 		setLoansToRender(loans)
	// 	})
	// }
	useEffect(async() => {
		const groupingState = 'issue_month';
		const loansBySelectedGroup = loans.reduce((loan, value) => {
			if (!loan[value[groupingState]]) {
				loan[value[groupingState]] = {
					loans: [],
					loan_amnt: 0,
					int_rate_sum: 0
				};
			}
		 
			// Grouping
			loan[value[groupingState]]['loans'] = [...loan[value[groupingState]]['loans'], value];
			loan[value[groupingState]]['loan_amnt'] = loan[value[groupingState]]['loan_amnt'] + parseInt(value['loan_amnt'], "10")
			loan[value[groupingState]]['int_rate_sum'] = loan[value[groupingState]]['int_rate_sum'] + Number(value['interest_rate_percent'])
			return loan;
		}, {});
		setLoansToRender(loans)
		setLoansByGroup(loansBySelectedGroup)
	}, [loans])
	console.log('loansByGroup: ', loansByGroup, loans);
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]
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
					>
						{loansToRender && loansToRender.map((loan, index) => {
							return (
								<div key={Math.random()}>
									{/* <LoanCard
										index={index}
										loan={loan}
										setLoansToRender={setLoansToRender}
										setLoanCounts={setLoanCounts}
									/> */}
								</div>
							)
						})}
						{months.map((month, index) => {
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
													{loansByGroup[month.slice(0,3)]['loans'].map((loan) => {
														return (
															<LoanCard
																index={index}
																loan={loan}
																setLoansToRender={setLoansToRender}
																setLoanCounts={setLoanCounts}
															/>
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
												>
													<div>
														<div style={{ fontWeight: '500' }}>
															Loan Amount
														</div>
														<div style={{ marginTop: '10px' }}>
															{fieldLineUp[0].format(Math.round(loansByGroup[month.slice(0,3)]['loan_amnt'] / loansByGroup[month.slice(0,3)]['loans'].length * 100) / 100)}
														</div>
													</div>
													<Box
														ml="20px"
													>
														<div style={{ fontWeight: '500' }}>
															Average Interest Rate
														</div>
														<div style={{ marginTop: '10px' }}>
															{Math.round(loansByGroup[month.slice(0,3)]['int_rate_sum'] / loansByGroup[month.slice(0,3)]['loans'].length * 100) / 100}%
														</div>
													</Box>
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