import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	decrement,
	increment,
	incrementByAmount,
} from './redux/reducers/counter.js';

function App() {
	// we are distructuring "count" from counter.js as 'initial state' (from "store.js" to ("rootReducer.js" -counter )to counter.js )
	const { count } = useSelector((state) => state.allReducers.counter);
	const dispatch = useDispatch();

	return (
		<>
			<Typography variant="h2">Hi here! This is Keza-codes back</Typography>

			<div>
				<div>
					<Button variant="contained" onClick={() => dispatch(increment())}>
						Increment
					</Button>

					<Typography variant="h4">
						<span>value: {count}</span>
					</Typography>

					<Button variant="contained" onClick={() => dispatch(decrement())}>
						Decrement
					</Button>
					<Button
						variant="contained"
						onClick={() => dispatch(incrementByAmount(10))}
					>
						Increment by 10
					</Button>
				</div>
			</div>
		</>
	);
}

export default App;
